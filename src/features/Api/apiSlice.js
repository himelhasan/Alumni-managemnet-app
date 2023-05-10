import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alumni-managemnet-app-server.vercel.app",
    // baseUrl: "http://localhost:8000/",
  }),
  tagTypes: [
    "userRoles",
    "userRole",
    "alumni",
    "person",
    "events",
    "event",
    "eventComments",
    "eventComment",
    "allNews",
    "newsComments",
    "newsComment",
    "news",
    "stories",
    "storyComments",
    "storyComment",
    "story",
    "galleries",
    "gallery",
    "charities",
    "charity",
    "donations",
    "donation",
  ],
  endpoints: (builder) => ({
    // * Gallery  //
    getGalleries: builder.query({
      query: () => "/galleries ",
      providesTags: ["galleries"],
    }),
    getCategoryWiseGallery: builder.query({
      query: (id) => `/galleryCategories/${id}`,
    }),

    getGalleryCategories: builder.query({
      query: () => "/galleryCategories",
    }),
    getGalleriesFeatured: builder.query({
      query: () => "/galleries/featured",
      providesTags: ["galleries"],
    }),
    getGalleriesTrending: builder.query({
      query: () => "/galleries/trending ",
      providesTags: ["galleries"],
    }),

    // BatchWise Gallery data
    getBatchWiseGallery: builder.query({
      query: (id) => `/galleries/batch/${id}`,
      providesTags: ["galleries"],
    }),

    //* EVENTS  //

    // get all events
    getEvents: builder.query({
      query: () => "/events",
      providesTags: ["events"],
    }),

    //  batchWise events data
    getBatchWiseEvents: builder.query({
      query: (id) => `/events/batch/${id}`,
      providesTags: ["events"],
    }),

    //  get my events based on email
    getMyEvents: builder.query({
      query: (email) => `/events/myEvents/${email}`,
      providesTags: ["events"],
    }),

    //  single event
    getSingleEvent: builder.query({
      query: (id) => `/event/${id}`,
      providesTags: (result, error, arg) => [{ type: "event", id: arg }],
    }),

    // events categories
    getEventsCategories: builder.query({
      query: () => "/eventCategories",
    }),

    // create event
    addEvents: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),

    //   Edit a  event
    editEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/event/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: (result, error, arg) => [
        "events",
        { type: "event", id: arg.id },
      ],
    }),

    /// delete a event
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/event/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["events"],
    }),

    // * NEWS
    // authorization header added
    getaLLNews: builder.query({
      query: () => ({
        url: `/news`,
      }),
      providesTags: ["allNews"],
    }),

    // headers: {
    //   authorization: `bearer ${localStorage.getItem("access_token")}`,
    // },

    getSingleNews: builder.query({
      query: (id) => `/news/${id}`,
      providesTags: (result, error, arg) => [{ type: "news", id: arg }],
    }),

    getNewsCategories: builder.query({
      query: () => "/alumniNewsCategories",
    }),

    //  get news based on email
    getMyNews: builder.query({
      query: (email) => `/news/mynews/${email}`,
      providesTags: ["allNews"],
    }),

    // add a new News
    addNews: builder.mutation({
      query: (data) => ({
        url: "/news",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["allNews"],
    }),

    //  Edit a  NEWS
    editNews: builder.mutation({
      query: ({ id, data }) => ({
        url: `/news/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "allNews",
        { type: "news", id: arg.id },
      ],
    }),

    /// delete a news
    deleteNews: builder.mutation({
      query: (id) => ({
        url: `/news/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["allNews"],
    }),

    // * NEWS COMMENTS * //

    // All News Comments Data
    getAllNewsComments: builder.query({
      query: (id) => `/newsComment/${id}`,
      providesTags: ["newsComments"],
    }),

    //  Get user based comments
    getAllNewsCommentsOfaUser: builder.query({
      query: ({ email, id }) => `/single-comment?email=${email}&id=${id}`,
      providesTags: (result, error, arg) => [{ type: "newsComments", id: arg.id }],
    }),

    // add a new News comment
    addNewsComment: builder.mutation({
      query: (data) => ({
        url: "/newsComments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["newsComments"],
    }),

    // delete a News comment
    deleteNewsComment: builder.mutation({
      query: (id) => ({
        url: `/newsComments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["newsComments"],
    }),

    //   Edit a  News comment
    editNewsComment: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/update-comment/${id}`,
        method: "PUT",
        body: updatedData,
      }),

      invalidatesTags: (result, error, arg) => [
        "newsComments",
        { type: "newsComment", id: arg.id },
      ],
    }),

    // * Alumni * //

    // All Alumni Data
    getAllAlumni: builder.query({
      query: () => "/alumni",
      providesTags: ["alumni"],
    }),

    // yearWise Alumni Data
    getYearWiseAlumni: builder.query({
      query: (id) => `/alumni/batch/${id}`,
      providesTags: ["alumni"],
    }),

    // single Alumni Data
    getSingleAlumni: builder.query({
      query: (email) => `/alumni/${email}`,
      providesTags: (result, error, arg) => [{ type: "person", id: arg }],
    }),

    // add a new Alumni
    addAlumni: builder.mutation({
      query: (data) => ({
        url: "/alumni",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "alumni",
        { type: "person", id: arg.email },
      ],
    }),

    // Alumni Edit
    editAlumni: builder.mutation({
      query: ({ email, data }) => ({
        url: `/alumni/${email}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "alumni",
        { type: "person", id: arg.email },
      ],
    }),

    deleteAlumni: builder.mutation({
      query: (email) => ({
        url: `/alumni/${email}`,
        method: "DELETE",
      }),
      invalidatesTags: ["alumni"],
    }),

    // *  successful stories * //

    // All  successful stories Data
    getAllSuccessfulStories: builder.query({
      query: () => "/successFullStory",
      providesTags: ["stories"],
    }),
    // All  successful stories Data of a  user, based on email
    getAllSuccessfulStoriesOfAUser: builder.query({
      query: (email) => `/successFullStory/email/${email}`,
      providesTags: ["stories"],
    }),

    //  single successful stories
    getSingleSuccessfulStories: builder.query({
      query: (id) => `/successFullStory/${id}`,
      providesTags: (result, error, arg) => [{ type: "story", id: arg }],
    }),

    //  single successful stories
    getBatchWiseSuccessfulStories: builder.query({
      query: (year) => `/successFullStory/batch/${year}`,
      providesTags: (result, error, arg) => [{ type: "story", id: arg }],
    }),

    // add a successful stories
    addSuccessfulStories: builder.mutation({
      query: (data) => ({
        url: "/successFullStory/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["stories"],
    }),

    // edit successful stories
    editSuccessfulStories: builder.mutation({
      query: ({ id, data }) => ({
        url: `/successFullStory/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "stories",
        { type: "story", id: arg.id },
      ],
    }),

    // delete stroy
    deleteSuccessfulStories: builder.mutation({
      query: (id) => ({
        url: `/successFullStory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["stories"],
    }),

    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

    //   // * NEWS COMMENTS * //

    // // All News Comments Data
    // getAllNewsComments: builder.query({
    //   query: (id) => `/newsComment/${id}`,
    //   providesTags: ["newsComments"],
    // }),

    // //  Get user based comments
    // getAllNewsCommentsOfaUser: builder.query({
    //   query: ({ email, id }) => `/single-comment?email=${email}&id=${id}`,
    //   providesTags: (result, error, arg) => [{ type: "newsComments", id: arg.id }],
    // }),

    // // add a new News comment
    // addNewsComment: builder.mutation({
    //   query: (data) => ({
    //     url: "/newsComments",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["newsComments"],
    // }),

    // // delete a News comment
    // deleteNewsComment: builder.mutation({
    //   query: (id) => ({
    //     url: `/newsComments/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["newsComments"],
    // }),

    // //   Edit a  News comment
    // editNewsComment: builder.mutation({
    //   query: ({ id, updatedData }) => ({
    //     url: `/update-comment/${id}`,
    //     method: "PUT",
    //     body: updatedData,
    //   }),

    //   invalidatesTags: (result, error, arg) => [
    //     "newsComments",
    //     { type: "newsComment", id: arg.id },
    //   ],
    // }),

    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

    // *  CHARITY * //

    //  all charity
    getAllCharity: builder.query({
      query: () => `/charity/`,
      providesTags: ["charities"],
    }),
    // get individual  all charity
    getIndividualAllCharity: builder.query({
      query: (email) => `/charity/email/${email}`,
      providesTags: ["charities"],
    }),

    //  single charity
    getSingleCharity: builder.query({
      query: (id) => `/charity/${id}`,
      providesTags: (result, error, arg) => [{ type: "charity", id: arg }],
    }),

    //  batchWise charity
    getBatchWiseCharity: builder.query({
      query: (batch) => `/charity/batch/${batch}`,
      providesTags: (result, error, arg) => [{ type: "charity", id: arg }],
    }),

    //  get my charity based on email
    getMyCharity: builder.query({
      query: (email) => `/charity/myCharity/${email}`,
      providesTags: ["charities"],
    }),

    // add a new Charity
    addCharity: builder.mutation({
      query: (data) => ({
        url: "/charity/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["charities"],
    }),

    // edit charity
    editCharity: builder.mutation({
      query: ({ id, data }) => ({
        url: `/charity/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "charities",
        { type: "charity", id: arg.id },
      ],
    }),

    deleteCharity: builder.mutation({
      query: (id) => ({
        url: `/charity/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["charities"],
    }),

    // *

    //  all Donation data
    getAllCharityDonation: builder.query({
      query: () => "/charityDonation",
      providesTags: ["donations"],
    }),

    // /charityDonation/${user?.email}

    //  my donation data
    getMyDonation: builder.query({
      query: (email) => `/charityDonation/${email}`,
      providesTags: (result, error, arg) => [{ type: "charity", id: arg }],
    }),

    // * EMAIL WISE DATE GET * \\

    // * extras

    //  all university names
    getAllUniversityName: builder.query({
      query: () => "/all-university-name",
    }),

    // All batches name
    getAllBatches: builder.query({
      query: () => "/all-batches",
    }),
    // All graduation major
    getAllGraduationMajor: builder.query({
      query: () => "/all-graduation-major",
    }),
    // All degree programs
    getAllDegreePrograms: builder.query({
      query: () => "/all-degree-programs",
    }),

    // is the userAdmin
    getIsAdmin: builder.query({
      query: (email) => `/alumni/admin/${email}`,
      providesTags: (result, error, arg) => [{ type: "userRole", id: arg }],
    }),
    // is the userAdmin
    getIsBatchAdmin: builder.query({
      query: (email) => `/alumni/BatchAdmin/${email}`,
      providesTags: (result, error, arg) => [{ type: "userRole", id: arg }],
    }),

    // make user Admin
    makeAdmin: builder.mutation({
      query: (id) => ({
        url: `/alumni/admin/${id}`,
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("access_token")}`,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "alumni", id: arg.id }],
    }),

    // make user Admin
    makeBatchAdmin: builder.mutation({
      query: (id) => ({
        url: `/alumni/BatchAdmin/${id}`,
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("access_token")}`,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "alumni", id: arg.id }],
    }),
  }),
});

export const {
  //   successful stories
  useGetAllSuccessfulStoriesQuery,
  useGetAllSuccessfulStoriesOfAUserQuery,
  useGetSingleSuccessfulStoriesQuery,
  useAddSuccessfulStoriesMutation,
  useEditSuccessfulStoriesMutation,
  useDeleteSuccessfulStoriesMutation,
  useGetBatchWiseSuccessfulStoriesQuery,

  //charity
  useGetAllCharityQuery,
  useGetSingleCharityQuery,
  useGetIndividualAllCharityQuery,
  useGetBatchWiseCharityQuery,
  useAddCharityMutation,
  useEditCharityMutation,
  useDeleteCharityMutation,
  useGetMyCharityQuery,
  /// all donations
  useGetAllCharityDonationQuery,
  useGetMyDonationQuery,

  // NEWS
  useGetaLLNewsQuery,
  useGetSingleNewsQuery,
  useGetNewsCategoriesQuery,
  useAddNewsMutation,
  useEditNewsMutation,
  useDeleteNewsMutation,
  useGetMyNewsQuery,

  // news comments
  useGetAllNewsCommentsQuery,
  useAddNewsCommentMutation,
  useDeleteNewsCommentMutation,
  useGetAllNewsCommentsOfaUserQuery,
  useEditNewsCommentMutation,
  // GALLERY
  useGetGalleriesQuery,
  useGetGalleryCategoriesQuery,
  useGetCategoryWiseGalleryQuery,
  useGetGalleriesFeaturedQuery,
  useGetGalleriesTrendingQuery,
  useGetBatchWiseGalleryQuery,

  // EVENTS
  useGetEventsQuery,
  useGetBatchWiseEventsQuery,
  useGetEventsCategoriesQuery, //event category
  useGetSingleEventQuery,
  useGetMyEventsQuery,

  // mutations of events
  useAddEventsMutation,
  useDeleteEventMutation,
  useEditEventMutation,

  //  All Alumni
  useGetAllAlumniQuery,
  useGetYearWiseAlumniQuery,
  useGetSingleAlumniQuery,
  // Mutations of ALUMNI
  useAddAlumniMutation,
  useEditAlumniMutation,
  useDeleteAlumniMutation,

  // UTILS - EXTRAS
  useGetAllBatchesQuery,
  useGetAllUniversityNameQuery,
  useGetAllGraduationMajorQuery,
  useGetAllDegreeProgramsQuery,

  // admin related
  useGetIsAdminQuery,
  useGetIsBatchAdminQuery,
  useMakeAdminMutation,
  useMakeBatchAdminMutation,
} = apiSlice;
