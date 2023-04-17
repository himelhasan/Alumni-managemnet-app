import React from "react";

const CreateEvents = () => {
  const handleEvents = (event) => {
    event.preventDefault();
    console.log("events Clicked");
    const form = event.target;
    const event_title = form.eventsHeading.value;
    const category = form.eventsCategory.value;
    const description = form.eventsDetails.value;
    const date = form.eventsDates.value;
    const time = form.time.value;
    const location = form.eventsLocation.value;
    const batch = form.batch.value;
    const image_url = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image_url);

    fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const eventsInfo = {
          event_title,
          image_url: data.data.display_url,
          category,
          description,
          date,
          time,
          location,
          batch,
        };
        fetch("http://localhost:8000/alumniEvents", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(eventsInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(eventsInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-5xl my-5">Events</h2>
      <form onSubmit={(event) => handleEvents(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Events Heading"
            className="input input-bordered w-full"
            name="eventsHeading"
            required
          />
          <input
            type="text"
            placeholder="Events Location"
            className="input input-bordered w-full "
            name="eventsLocation"
            required
          />
          <div className="form-control w-full ">
            <select className="select select-bordered " name="eventsCategory">
              <option selected>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <select className="select select-bordered " name="eventsCategory">
              <option disabled selected>
                Seminer
              </option>
              <option>Fund Raising</option>
              <option>Leadership</option>
              <option>Picnic</option>
              <option>StudyTour</option>
            </select>
          </div>
          <input
            type="time"
            placeholder="Events Time"
            className="input input-bordered w-full  mb-5 "
            name="time"
            required
          />
          <input
            type="date"
            placeholder="Events Date"
            className="input input-bordered w-full  mb-5 "
            name="eventsDates"
            required
          />
        </div>
        <div className="form-control w-full ">
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            name="image"
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="Events Details"
          name="eventsDetails"
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          {" "}
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;