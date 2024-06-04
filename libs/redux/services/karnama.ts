import { emptySplitApi as api } from './emptyApi'
export const addTagTypes = [
  'Account',
  'Categories',
  'Comment',
  'Company',
  'Courses',
  'Exam',
  'Gift',
  'Mentor',
  'Order',
  'Payments',
  'Pricing',
  'Qualifications',
  'Suggestion',
  'Tags',
  'UGQ',
] as const
export const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      signInByOtp: build.mutation<SignInByOtpApiResponse, SignInByOtpApiArg>({
        query: (queryArg) => ({
          url: `/Account/SignInByOTP`,
          method: 'POST',
          body: queryArg.signInByOtpCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      creditLogsAndCoupons: build.query<
        CreditLogsAndCouponsApiResponse,
        CreditLogsAndCouponsApiArg
      >({
        query: () => ({ url: `/Account/CreditLogsAndCoupons` }),
        providesTags: ['Account'],
      }),
      getDiscountCode: build.mutation<
        GetDiscountCodeApiResponse,
        GetDiscountCodeApiArg
      >({
        query: () => ({ url: `/Account/GetDiscountCode`, method: 'POST' }),
        invalidatesTags: ['Account'],
      }),
      info: build.mutation<InfoApiResponse, InfoApiArg>({
        query: () => ({ url: `/Account/Info`, method: 'POST' }),
        invalidatesTags: ['Account'],
      }),
      setInfo: build.mutation<SetInfoApiResponse, SetInfoApiArg>({
        query: (queryArg) => ({
          url: `/Account/SetInfo`,
          method: 'POST',
          body: queryArg.setInfoModel,
        }),
        invalidatesTags: ['Account'],
      }),
      verfySignInByOtp: build.mutation<
        VerfySignInByOtpApiResponse,
        VerfySignInByOtpApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/VerfySignInByOTP`,
          method: 'POST',
          body: queryArg.verfySignInByOtpCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      fromInre: build.mutation<FromInreApiResponse, FromInreApiArg>({
        query: (queryArg) => ({
          url: `/Account/FromInre`,
          method: 'POST',
          body: queryArg.user,
        }),
        invalidatesTags: ['Account'],
      }),
      fromNamatek: build.mutation<FromNamatekApiResponse, FromNamatekApiArg>({
        query: (queryArg) => ({
          url: `/Account/FromNamatek`,
          method: 'POST',
          body: queryArg.userWithCourse,
        }),
        invalidatesTags: ['Account'],
      }),
      setUserPassword: build.mutation<
        SetUserPasswordApiResponse,
        SetUserPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/SetUserPassword`,
          method: 'POST',
          body: queryArg.setPasswordCommand,
        }),
        invalidatesTags: ['Account'],
      }),
      addSubUser: build.mutation<AddSubUserApiResponse, AddSubUserApiArg>({
        query: (queryArg) => ({
          url: `/Account/AddSubUser`,
          method: 'POST',
          body: queryArg.addSubUserForm,
        }),
        invalidatesTags: ['Account'],
      }),
      signIn: build.mutation<SignInApiResponse, SignInApiArg>({
        query: (queryArg) => ({
          url: `/Account/SignIn`,
          method: 'POST',
          body: queryArg.userSignInForm,
        }),
        invalidatesTags: ['Account'],
      }),
      logout: build.mutation<LogoutApiResponse, LogoutApiArg>({
        query: () => ({ url: `/Account/Logout`, method: 'POST' }),
        invalidatesTags: ['Account'],
      }),
      forgetPassword: build.mutation<
        ForgetPasswordApiResponse,
        ForgetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/ForgetPassword`,
          method: 'POST',
          body: queryArg.forgotPasswordForm,
        }),
        invalidatesTags: ['Account'],
      }),
      resetPassword: build.mutation<
        ResetPasswordApiResponse,
        ResetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/Account/ResetPassword`,
          method: 'POST',
          body: queryArg.resetPasswordForm,
        }),
        invalidatesTags: ['Account'],
      }),
      getApiCategories: build.query<
        GetApiCategoriesApiResponse,
        GetApiCategoriesApiArg
      >({
        query: () => ({ url: `/api/Categories` }),
        providesTags: ['Categories'],
      }),
      getApiCategoriesCounts: build.query<
        GetApiCategoriesCountsApiResponse,
        GetApiCategoriesCountsApiArg
      >({
        query: () => ({ url: `/api/Categories/Counts` }),
        providesTags: ['Categories'],
      }),
      getApiCategoriesById: build.query<
        GetApiCategoriesByIdApiResponse,
        GetApiCategoriesByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Categories/${queryArg.id}` }),
        providesTags: ['Categories'],
      }),
      comment: build.mutation<CommentApiResponse, CommentApiArg>({
        query: (queryArg) => ({
          url: `/api/Comment/Comment`,
          method: 'POST',
          body: queryArg.commentDto,
        }),
        invalidatesTags: ['Comment'],
      }),
      companySegments: build.query<
        CompanySegmentsApiResponse,
        CompanySegmentsApiArg
      >({
        query: () => ({ url: `/api/Company/CompanySegments` }),
        providesTags: ['Company'],
      }),
      companyAdminCredits: build.query<
        CompanyAdminCreditsApiResponse,
        CompanyAdminCreditsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/CompanyAdminCredits`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Company'],
      }),
      addCompanyAdminCredit: build.mutation<
        AddCompanyAdminCreditApiResponse,
        AddCompanyAdminCreditApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/AddCompanyAdminCredit`,
          method: 'POST',
          params: {
            id: queryArg.id,
            courseId: queryArg.courseId,
            credit: queryArg.credit,
            days: queryArg.days,
          },
        }),
        invalidatesTags: ['Company'],
      }),
      requestCredit: build.mutation<
        RequestCreditApiResponse,
        RequestCreditApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/RequestCredit`,
          method: 'POST',
          params: { courseId: queryArg.courseId },
        }),
        invalidatesTags: ['Company'],
      }),
      companyUser: build.query<CompanyUserApiResponse, CompanyUserApiArg>({
        query: (queryArg) => ({
          url: `/api/Company/CompanyUser`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Company'],
      }),
      setUserSegmentValue: build.mutation<
        SetUserSegmentValueApiResponse,
        SetUserSegmentValueApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetUserSegmentValue`,
          method: 'POST',
          params: {
            id: queryArg.id,
            segmentId: queryArg.segmentId,
            segmentValueId: queryArg.segmentValueId,
          },
        }),
        invalidatesTags: ['Company'],
      }),
      setUserFullname: build.mutation<
        SetUserFullnameApiResponse,
        SetUserFullnameApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetUserFullname`,
          method: 'POST',
          params: {
            id: queryArg.id,
            firstname: queryArg.firstname,
            lastname: queryArg.lastname,
          },
        }),
        invalidatesTags: ['Company'],
      }),
      companyUsers: build.query<CompanyUsersApiResponse, CompanyUsersApiArg>({
        query: () => ({ url: `/api/Company/CompanyUsers` }),
        providesTags: ['Company'],
      }),
      setActivation: build.mutation<
        SetActivationApiResponse,
        SetActivationApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetActivation`,
          method: 'POST',
          params: { id: queryArg.id, active: queryArg.active },
        }),
        invalidatesTags: ['Company'],
      }),
      setCreditActivation: build.mutation<
        SetCreditActivationApiResponse,
        SetCreditActivationApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Company/SetCreditActivation`,
          method: 'POST',
          params: { id: queryArg.id, active: queryArg.active },
        }),
        invalidatesTags: ['Company'],
      }),
      changeCredit: build.mutation<ChangeCreditApiResponse, ChangeCreditApiArg>(
        {
          query: (queryArg) => ({
            url: `/api/Company/ChangeCredit`,
            method: 'POST',
            params: { id: queryArg.id, credit: queryArg.credit },
          }),
          invalidatesTags: ['Company'],
        }
      ),
      getCourses: build.query<GetCoursesApiResponse, GetCoursesApiArg>({
        query: () => ({ url: `/api/Courses/GetCourses` }),
        providesTags: ['Courses'],
      }),
      getFeatured: build.query<GetFeaturedApiResponse, GetFeaturedApiArg>({
        query: () => ({ url: `/api/Courses/GetFeatured` }),
        providesTags: ['Courses'],
      }),
      searchCourse: build.query<SearchCourseApiResponse, SearchCourseApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/SearchCourse`,
          params: { term: queryArg.term },
        }),
        providesTags: ['Courses'],
      }),
      byCategory: build.query<ByCategoryApiResponse, ByCategoryApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/ByCategory`,
          params: { categoryId: queryArg.categoryId },
        }),
        providesTags: ['Courses'],
      }),
      log: build.mutation<LogApiResponse, LogApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/Log`,
          method: 'POST',
          body: queryArg.playLogDto,
        }),
        invalidatesTags: ['Courses'],
      }),
      superPremiumCourses: build.query<
        SuperPremiumCoursesApiResponse,
        SuperPremiumCoursesApiArg
      >({
        query: () => ({ url: `/api/Courses/SuperPremiumCourses` }),
        providesTags: ['Courses'],
      }),
      my: build.query<MyApiResponse, MyApiArg>({
        query: () => ({ url: `/api/Courses/My` }),
        providesTags: ['Courses'],
      }),
      others: build.query<OthersApiResponse, OthersApiArg>({
        query: (queryArg) => ({
          url: `/api/Courses/Others`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Courses'],
      }),
      getApiCoursesByIdGraph: build.query<
        GetApiCoursesByIdGraphApiResponse,
        GetApiCoursesByIdGraphApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Courses/${queryArg.id}/Graph`,
          params: { cuid: queryArg.cuid },
        }),
        providesTags: ['Courses'],
      }),
      getApiCoursesByIdAGraph: build.query<
        GetApiCoursesByIdAGraphApiResponse,
        GetApiCoursesByIdAGraphApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Courses/${queryArg.id}/AGraph`,
          params: { uuid: queryArg.uuid },
        }),
        providesTags: ['Courses'],
      }),
      getApiCoursesById: build.query<
        GetApiCoursesByIdApiResponse,
        GetApiCoursesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Courses/${queryArg.id}`,
          params: { lessonId: queryArg.lessonId },
        }),
        providesTags: ['Courses'],
      }),
      getDistinctedPlayLogs: build.query<
        GetDistinctedPlayLogsApiResponse,
        GetDistinctedPlayLogsApiArg
      >({
        query: () => ({ url: `/api/Exam/GetDistinctedPlayLogs` }),
        providesTags: ['Exam'],
      }),
      getGift: build.query<GetGiftApiResponse, GetGiftApiArg>({
        query: (queryArg) => ({
          url: `/api/Gift/GetGift`,
          params: { code: queryArg.code },
        }),
        providesTags: ['Gift'],
      }),
      getSubUsersCredit: build.query<
        GetSubUsersCreditApiResponse,
        GetSubUsersCreditApiArg
      >({
        query: () => ({ url: `/Mentor/GetSubUsersCredit` }),
        providesTags: ['Mentor'],
      }),
      addSubUsersCredit: build.mutation<
        AddSubUsersCreditApiResponse,
        AddSubUsersCreditApiArg
      >({
        query: (queryArg) => ({
          url: `/Mentor/AddSubUsersCredit`,
          method: 'POST',
          body: queryArg.addCompanyAdminCreditDto,
        }),
        invalidatesTags: ['Mentor'],
      }),
      getMentorshipUserLogs: build.mutation<
        GetMentorshipUserLogsApiResponse,
        GetMentorshipUserLogsApiArg
      >({
        query: () => ({ url: `/Mentor/GetMentorshipUserLogs`, method: 'POST' }),
        invalidatesTags: ['Mentor'],
      }),
      getAllOrders: build.query<GetAllOrdersApiResponse, GetAllOrdersApiArg>({
        query: () => ({ url: `/api/Order/GetAllOrders` }),
        providesTags: ['Order'],
      }),
      myPayments: build.query<MyPaymentsApiResponse, MyPaymentsApiArg>({
        query: () => ({ url: `/api/Payments/MyPayments` }),
        providesTags: ['Payments'],
      }),
      receipt: build.query<ReceiptApiResponse, ReceiptApiArg>({
        query: (queryArg) => ({
          url: `/api/Payments/Receipt`,
          params: { id: queryArg.id },
        }),
        providesTags: ['Payments'],
      }),
      pricing: build.query<PricingApiResponse, PricingApiArg>({
        query: () => ({ url: `/api/Pricing/Pricing` }),
        providesTags: ['Pricing'],
      }),
      payment: build.query<PaymentApiResponse, PaymentApiArg>({
        query: (queryArg) => ({
          url: `/api/Pricing/Payment`,
          params: { duration: queryArg.duration, package: queryArg['package'] },
        }),
        providesTags: ['Pricing'],
      }),
      getApiQualifications: build.query<
        GetApiQualificationsApiResponse,
        GetApiQualificationsApiArg
      >({
        query: () => ({ url: `/api/Qualifications` }),
        providesTags: ['Qualifications'],
      }),
      getApiQualificationsById: build.query<
        GetApiQualificationsByIdApiResponse,
        GetApiQualificationsByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Qualifications/${queryArg.id}` }),
        providesTags: ['Qualifications'],
      }),
      suggest: build.mutation<SuggestApiResponse, SuggestApiArg>({
        query: (queryArg) => ({
          url: `/api/Suggestion/Suggest`,
          method: 'POST',
          body: queryArg.suggestion,
        }),
        invalidatesTags: ['Suggestion'],
      }),
      getApiTags: build.query<GetApiTagsApiResponse, GetApiTagsApiArg>({
        query: () => ({ url: `/api/Tags` }),
        providesTags: ['Tags'],
      }),
      getApiTagsById: build.query<
        GetApiTagsByIdApiResponse,
        GetApiTagsByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Tags/${queryArg.id}` }),
        providesTags: ['Tags'],
      }),
      createUgq: build.mutation<CreateUgqApiResponse, CreateUgqApiArg>({
        query: (queryArg) => ({
          url: `/api/UGQ/CreateUGQ`,
          method: 'POST',
          body: queryArg.createUgqModel,
        }),
        invalidatesTags: ['UGQ'],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as enhancedApi }
export type SignInByOtpApiResponse = unknown
export type SignInByOtpApiArg = {
  signInByOtpCommand: SignInByOtpCommand
}
export type CreditLogsAndCouponsApiResponse =
  /** status 200 Success */ CreditLogsAndCouponsModel
export type CreditLogsAndCouponsApiArg = void
export type GetDiscountCodeApiResponse = /** status 200 Success */ string
export type GetDiscountCodeApiArg = void
export type InfoApiResponse = /** status 200 Success */ UserInfo
export type InfoApiArg = void
export type SetInfoApiResponse = /** status 200 Success */ UserInfo
export type SetInfoApiArg = {
  setInfoModel: SetInfoModel
}
export type VerfySignInByOtpApiResponse = /** status 200 Success */ Token
export type VerfySignInByOtpApiArg = {
  verfySignInByOtpCommand: VerfySignInByOtpCommand
}
export type FromInreApiResponse = /** status 200 Success */ Token
export type FromInreApiArg = {
  user: User
}
export type FromNamatekApiResponse = unknown
export type FromNamatekApiArg = {
  userWithCourse: UserWithCourse
}
export type SetUserPasswordApiResponse = unknown
export type SetUserPasswordApiArg = {
  setPasswordCommand: SetPasswordCommand
}
export type AddSubUserApiResponse = unknown
export type AddSubUserApiArg = {
  addSubUserForm: AddSubUserForm
}
export type SignInApiResponse = /** status 200 Success */ Token
export type SignInApiArg = {
  userSignInForm: UserSignInForm
}
export type LogoutApiResponse = unknown
export type LogoutApiArg = void
export type ForgetPasswordApiResponse = unknown
export type ForgetPasswordApiArg = {
  forgotPasswordForm: ForgotPasswordForm
}
export type ResetPasswordApiResponse = unknown
export type ResetPasswordApiArg = {
  resetPasswordForm: ResetPasswordForm
}
export type GetApiCategoriesApiResponse = /** status 200 Success */ Category[]
export type GetApiCategoriesApiArg = void
export type GetApiCategoriesCountsApiResponse =
  /** status 200 Success */ CategoryCount[]
export type GetApiCategoriesCountsApiArg = void
export type GetApiCategoriesByIdApiResponse = /** status 200 Success */ Category
export type GetApiCategoriesByIdApiArg = {
  id: number
}
export type CommentApiResponse = unknown
export type CommentApiArg = {
  commentDto: CommentDto
}
export type CompanySegmentsApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type CompanySegmentsApiArg = void
export type CompanyAdminCreditsApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type CompanyAdminCreditsApiArg = {
  id?: number
}
export type AddCompanyAdminCreditApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type AddCompanyAdminCreditApiArg = {
  id?: number
  courseId?: number
  credit?: number
  days?: number
}
export type RequestCreditApiResponse = unknown
export type RequestCreditApiArg = {
  courseId?: number
}
export type CompanyUserApiResponse = /** status 200 Success */ CompanyUser
export type CompanyUserApiArg = {
  id?: number
}
export type SetUserSegmentValueApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type SetUserSegmentValueApiArg = {
  id?: number
  segmentId?: number
  segmentValueId?: number
}
export type SetUserFullnameApiResponse = unknown
export type SetUserFullnameApiArg = {
  id?: number
  firstname?: string
  lastname?: string
}
export type CompanyUsersApiResponse = /** status 200 Success */ CompanyUserDto[]
export type CompanyUsersApiArg = void
export type SetActivationApiResponse =
  /** status 200 Success */ CompanyUserDto[]
export type SetActivationApiArg = {
  id?: number
  active?: boolean
}
export type SetCreditActivationApiResponse = unknown
export type SetCreditActivationApiArg = {
  id?: number
  active?: boolean
}
export type ChangeCreditApiResponse = unknown
export type ChangeCreditApiArg = {
  id?: number
  credit?: number
}
export type GetCoursesApiResponse = /** status 200 Success */ CourseDto[]
export type GetCoursesApiArg = void
export type GetFeaturedApiResponse = /** status 200 Success */ Course[]
export type GetFeaturedApiArg = void
export type SearchCourseApiResponse = /** status 200 Success */ Course[]
export type SearchCourseApiArg = {
  term?: string
}
export type ByCategoryApiResponse = /** status 200 Success */ Course[]
export type ByCategoryApiArg = {
  categoryId?: number
}
export type LogApiResponse = unknown
export type LogApiArg = {
  playLogDto: PlayLogDto
}
export type SuperPremiumCoursesApiResponse = /** status 200 Success */ Course[]
export type SuperPremiumCoursesApiArg = void
export type MyApiResponse = /** status 200 Success */ Course[]
export type MyApiArg = void
export type OthersApiResponse = /** status 200 Success */ Course[]
export type OthersApiArg = {
  id?: number
}
export type GetApiCoursesByIdGraphApiResponse =
  /** status 200 Success */ UserLessonViewMinute[]
export type GetApiCoursesByIdGraphApiArg = {
  id: number
  cuid?: number
}
export type GetApiCoursesByIdAGraphApiResponse =
  /** status 200 Success */ UserLessonViewMinute[]
export type GetApiCoursesByIdAGraphApiArg = {
  id: number
  uuid?: string
}
export type GetApiCoursesByIdApiResponse =
  /** status 200 Success */ CourseDetailDto
export type GetApiCoursesByIdApiArg = {
  id: number
  lessonId?: number
}
export type GetDistinctedPlayLogsApiResponse =
  /** status 200 Success */ DistinctedPlayLog[]
export type GetDistinctedPlayLogsApiArg = void
export type GetGiftApiResponse = unknown
export type GetGiftApiArg = {
  code?: string
}
export type GetSubUsersCreditApiResponse =
  /** status 200 Success */ CompanyAdminCreditDto[]
export type GetSubUsersCreditApiArg = void
export type AddSubUsersCreditApiResponse =
  /** status 200 Success */ CompanyAdminCredit
export type AddSubUsersCreditApiArg = {
  addCompanyAdminCreditDto: AddCompanyAdminCreditDto
}
export type GetMentorshipUserLogsApiResponse =
  /** status 200 Success */ MentorUserLog[]
export type GetMentorshipUserLogsApiArg = void
export type GetAllOrdersApiResponse = /** status 200 Success */ Order[]
export type GetAllOrdersApiArg = void
export type MyPaymentsApiResponse = /** status 200 Success */ Payment[]
export type MyPaymentsApiArg = void
export type ReceiptApiResponse = /** status 200 Success */ Payment
export type ReceiptApiArg = {
  id?: number
}
export type PricingApiResponse = /** status 200 Success */ Pricing[]
export type PricingApiArg = void
export type PaymentApiResponse = /** status 200 Success */ string
export type PaymentApiArg = {
  duration?: number
  package?: number
}
export type GetApiQualificationsApiResponse =
  /** status 200 Success */ Qualification[]
export type GetApiQualificationsApiArg = void
export type GetApiQualificationsByIdApiResponse =
  /** status 200 Success */ Qualification
export type GetApiQualificationsByIdApiArg = {
  id: number
}
export type SuggestApiResponse = unknown
export type SuggestApiArg = {
  suggestion: Suggestion
}
export type GetApiTagsApiResponse = /** status 200 Success */ Tag[]
export type GetApiTagsApiArg = void
export type GetApiTagsByIdApiResponse = /** status 200 Success */ Tag
export type GetApiTagsByIdApiArg = {
  id: number
}
export type CreateUgqApiResponse = unknown
export type CreateUgqApiArg = {
  createUgqModel: CreateUgqModel
}
export type SignInByOtpCommand = {
  userName?: string | null
}
export type Coupon = {
  id?: number
  customerId?: number
  amount?: number
  code?: string | null
  insertDate?: string
  used?: boolean
  expireDate?: string | null
  customer?: Customer
}
export type Deal = {
  id?: number
  customerId?: number
  productId?: number
  stateId?: number
  note?: string | null
  insertDate?: string
  price?: number
  maxPc?: number
  share?: number | null
  usage?: number | null
  paymentDate?: string
  operatorId?: string | null
  duration?: number | null
  discount?: number | null
  userAgent?: string | null
  orderId?: number | null
  coupons?: string | null
  customer?: Customer
}
export type Customer = {
  id?: number
  name?: string | null
  mobile?: string | null
  mobile2?: string | null
  email?: string | null
  email2?: string | null
  address?: string | null
  insertDate?: string
  note?: string | null
  lastEdited?: string
  provinceId?: number | null
  provinceName?: string | null
  tags?: string | null
  operatorId?: string | null
  usage?: number
  point?: number | null
  postalCode?: string | null
  operatorRate?: number | null
  lastActivity?: string
  credit?: number
  referalBonus?: number
  company?: string | null
  hashCode?: string | null
  validity?: number | null
  firstName?: string | null
  lastName?: string | null
  unreadMessage?: string | null
  newUserId?: number | null
  coupons?: Coupon[] | null
  creditLogs?: CreditLog[] | null
  deals?: Deal[] | null
}
export type CreditLog = {
  id?: number
  customerId?: number
  amount?: number
  insertDate?: string
  title?: string | null
  remaining?: number
  expireDate?: string | null
  customer?: Customer
}
export type CreditLogsAndCouponsModel = {
  creditLogs?: CreditLog[] | null
  coupons?: Coupon[] | null
}
export type ApiError = {
  message?: string | null
  isWarning?: boolean
}
export type Province = {
  id?: number
  title?: string | null
  sort?: number | null
  cities?: City[] | null
  profiles?: Profile[] | null
}
export type City = {
  id?: number
  provinceId?: number
  title?: string | null
  province?: Province
  profiles?: Profile[] | null
}
export type Country = {
  id?: number
  title?: string | null
  profiles?: Profile[] | null
}
export type Profile = {
  firstName?: string | null
  lastName?: string | null
  gender?: boolean | null
  nationalCode?: string | null
  birthday?: string | null
  countryId?: number | null
  provinceId?: number | null
  cityId?: number | null
  jobStatusId?: number | null
  profileImage?: string | null
  userId?: number
  city?: City
  country?: Country
  province?: Province
  user?: AspNetUser
}
export type AspNetUserClaim = {
  id?: number
  userId?: number
  claimType?: string | null
  claimValue?: string | null
  user?: AspNetUser
}
export type AspNetUserLogin = {
  loginProvider?: string | null
  providerKey?: string | null
  providerDisplayName?: string | null
  userId?: number
  user?: AspNetUser
}
export type AspNetUserToken = {
  userId?: number
  loginProvider?: string | null
  name?: string | null
  value?: string | null
  user?: AspNetUser
}
export type Skill = {
  id?: number
  userId?: number
  title?: string | null
  user?: AspNetUser
  certificates?: Certificate[] | null
}
export type Certificate = {
  id?: number
  userId?: number
  title?: string | null
  certificateImage?: string | null
  issueDate?: string
  organization?: string | null
  user?: AspNetUser
  skills?: Skill[] | null
}
export type CourseQualification = {
  id?: number
  courseId?: number
  qualitficationId?: number
  isMandatory?: number
  course?: Course
  qualitfication?: Qualification
}
export type InreQuestion = {
  id?: number
  question?: string | null
  answer1?: string | null
  answer2?: string | null
  answer3?: string | null
  answer4?: string | null
  difficulty?: number | null
  adminDesc?: string | null
  revesionOf?: number | null
  isPublished?: boolean
  insertDate?: string
  qualificationId?: number
  inreYear?: number | null
  authorId?: string | null
  correctAnswer?: number
  updateDate?: string | null
  staticNumber?: number | null
  qualification?: Qualification
}
export type QualificationAdmin = {
  id?: number
  adminId?: string | null
  qualificationId?: number
  qualification?: Qualification
}
export type Qualification = {
  id?: number
  title?: string | null
  categoryId?: number
  titleEn?: string | null
  description?: string | null
  bookletCode?: string | null
  isLtr?: boolean
  category?: Category
  courseQualifications?: CourseQualification[] | null
  inreQuestions?: InreQuestion[] | null
  qualificationAdmins?: QualificationAdmin[] | null
}
export type Category = {
  id?: number
  title?: string | null
  courses?: Course[] | null
  qualifications?: Qualification[] | null
}
export type ContentProvider = {
  id?: number
  title?: string | null
  bio?: string | null
  avatar?: string | null
  link?: string | null
  adminId?: number | null
  courses?: Course[] | null
}
export type CompanyAdmin = {
  id?: number
  companyId?: number
  adminId?: number
  insertDate?: string
  isActive?: boolean | null
  acl?: string | null
  admin?: AspNetUser
  company?: Company
}
export type CompanyCourseVisiblity = {
  id?: number
  companyId?: number
  courseId?: number
  company?: Company
  course?: Course
}
export type CompanyCredit = {
  id?: number
  companyId?: number
  usedCredit?: number
  totalCredit?: number
  totalPrice?: number
  insertDate?: string
  startedUsingDate?: string | null
  pricePerMinute?: number | null
  endUsingDate?: string | null
  company?: Company
}
export type CompanyIpRange = {
  id?: number
  ipFrom?: number
  ipTo?: number
  companyId?: number
  insertDate?: string
  company?: Company
}
export type CompanySegment = {
  id?: number
  companyId?: number
  title?: string | null
  company?: Company
  companySegmentValues?: CompanySegmentValue[] | null
}
export type CompanyUserSegment = {
  id?: number
  userId?: number
  segmentValueId?: number
  segmentId?: number
  segmentValue?: CompanySegmentValue
  user?: AspNetUser
}
export type CompanySegmentValue = {
  id?: number
  companySegmentId?: number
  title?: string | null
  companySegment?: CompanySegment
  companyMentorAccesses?: CompanyMentorAccess[] | null
  companyUserSegments?: CompanyUserSegment[] | null
}
export type CompanyMentorAccess = {
  id?: number
  companyId?: number
  mentorId?: number
  segmentValueId?: number
  company?: Company
  mentor?: AspNetUser
  segmentValue?: CompanySegmentValue
}
export type CompanyUser = {
  id?: number
  companyId?: number
  userId?: number
  isActive?: boolean
  insertDate?: string
  company?: Company
  user?: AspNetUser
}
export type Question = {
  id?: number
  userId?: number
  courseId?: number
  lessonId?: number | null
  companyId?: number | null
  text?: string | null
  image?: string | null
  answer1?: string | null
  answer1Image?: string | null
  answer2?: string | null
  answer2Image?: string | null
  answer3?: string | null
  answer3Image?: string | null
  answer4?: string | null
  answer4Image?: string | null
  correctAnswer?: number
  difficulty?: number
  weight?: number
  published?: boolean
  approved?: boolean | null
  canShuffleAnswer?: boolean
  dependencyId?: number | null
  insertDate?: string
  updateDate?: string
  description?: string | null
  timeOfVideo?: number | null
  user?: AspNetUser
  userQuestionAnswers?: UserQuestionAnswer[] | null
  quizzes?: Quiz[] | null
}
export type UserQuestionAnswer = {
  id?: number
  examResultId?: number
  questionId?: number
  answer?: number | null
  isCorrect?: boolean | null
  startDate?: string | null
  endDate?: string | null
  examResult?: ExamResult
  question?: Question
}
export type ExamResult = {
  id?: number
  userId?: number
  quizId?: number
  score1?: number | null
  score2?: number | null
  startDate?: string | null
  endDate?: string | null
  description?: string | null
  correct?: number | null
  wrong?: number | null
  notAnswered?: number | null
  serial?: string | null
  certImage?: string | null
  passed?: boolean | null
  quiz?: Quiz
  user?: AspNetUser
  userQuestionAnswers?: UserQuestionAnswer[] | null
}
export type Quiz = {
  id?: number
  courseId?: number
  companyId?: number | null
  questionCount?: number
  canBack?: boolean
  canSkip?: boolean
  canShuffle?: boolean
  description?: string | null
  questionDuration?: number
  totalDuration?: number
  userId?: number
  acceptScore?: number
  certImage?: string | null
  startDate?: string | null
  endDate?: string | null
  insertDate?: string
  hasNegativeScore?: boolean
  company?: Company
  course?: Course
  examResults?: ExamResult[] | null
  questions?: Question[] | null
}
export type Company = {
  id?: number
  title?: string | null
  insertDate?: string
  logo?: string | null
  primaryColor?: string | null
  secondaryColor?: string | null
  smstemplate?: string | null
  companyAdminCredits?: CompanyAdminCredit[] | null
  companyAdmins?: CompanyAdmin[] | null
  companyCourseVisiblities?: CompanyCourseVisiblity[] | null
  companyCredits?: CompanyCredit[] | null
  companyIpRanges?: CompanyIpRange[] | null
  companyMentorAccesses?: CompanyMentorAccess[] | null
  companySegments?: CompanySegment[] | null
  companyUsers?: CompanyUser[] | null
  quizzes?: Quiz[] | null
}
export type CompanyAdminCredit = {
  id?: number
  adminId?: number | null
  userId?: number
  courseId?: number
  totalCredit?: number
  usedCredit?: number
  insertDate?: string
  companyId?: number
  isActive?: boolean | null
  expireDate?: string | null
  admin?: AspNetUser
  company?: Company
  course?: Course
  user?: AspNetUser
}
export type Tag = {
  id?: number
  title?: string | null
  courseTags?: CourseTag[] | null
}
export type CourseTag = {
  id?: number
  courseId?: number
  tagId?: number
  course?: Course
  tag?: Tag
}
export type Teacher = {
  id?: number
  title?: string | null
  profession?: string | null
  bio?: string | null
  avatar?: string | null
  userId?: number | null
  courseTeachers?: CourseTeacher[] | null
}
export type CourseTeacher = {
  id?: number
  courseId?: number
  teacherId?: number
  course?: Course
  teacher?: Teacher
}
export type Enroll = {
  id?: number
  userId?: number
  courseId?: number
  insertDate?: string
  progress?: number
  course?: Course
  user?: AspNetUser
}
export type UserAnswer = {
  id?: number
  userId?: number
  questionId?: number
  correct?: boolean
  answerIndex?: number | null
  insertDated?: string
  examId?: number | null
  userStarted?: string | null
  exam?: Exam
  question?: ExamQuestion
  user?: AspNetUser
}
export type ExamQuestion = {
  id?: number
  title?: string | null
  examId?: number
  imageUrl?: string | null
  answer1?: string | null
  answerImage1?: string | null
  answer2?: string | null
  answerImage2?: string | null
  answer3?: string | null
  answerImage3?: string | null
  answer4?: string | null
  answerImage4?: string | null
  correctAnswer?: number
  exam?: Exam
  userAnswers?: UserAnswer[] | null
}
export type Exam = {
  id?: number
  userId?: number
  courseId?: number
  startTime?: string
  endTime?: string
  score?: number
  maxScore?: number
  certificate?: string | null
  code?: string | null
  serialNumber?: number | null
  course?: Course
  user?: AspNetUser
  examQuestions?: ExamQuestion[] | null
  userAnswers?: UserAnswer[] | null
}
export type Order = {
  id?: number
  totalAmount?: number
  insertDate?: string
  updateDate?: string
  discount?: number
  discountCode?: string | null
  wooOrderId?: number | null
  userId?: number
  user?: AspNetUser
  orderItems?: OrderItem[] | null
}
export type OrderItem = {
  id?: number
  orderId?: number
  courseId?: number
  price?: number
  quantity?: number
  discount?: number | null
  share?: number | null
  course?: Course
  order?: Order
}
export type Attachment = {
  id?: number
  title?: string | null
  url?: string | null
  lessonId?: number
  lesson?: Lesson
}
export type PlayLog = {
  id?: number
  userId?: number
  action?: string | null
  insertDate?: string
  lessonId?: number
  time?: number
  ip?: string | null
  speed?: number
  isApp?: boolean | null
  lesson?: Lesson
  user?: AspNetUser
}
export type Ugq = {
  id?: number
  userId?: number
  question?: string | null
  answer1?: string | null
  answer2?: string | null
  answer3?: string | null
  answer4?: string | null
  adminDesc?: string | null
  isConfirmed?: boolean
  insertDate?: string
  lessonId?: number
  timeOfVideo?: number
  lesson?: Lesson
  user?: AspNetUser
}
export type UserLessonCompleted = {
  id?: number
  userId?: number
  lessonId?: number
  insertDate?: string
  timeOfVideo?: number
  finished?: boolean
  lesson?: Lesson
  user?: AspNetUser
}
export type Lesson = {
  id?: number
  title?: string | null
  description?: string | null
  sectionId?: number
  duation?: number
  videoUrl?: string | null
  isQuiz?: boolean
  priority?: number
  isFree?: boolean
  isOpen?: boolean
  hasSubtitle?: boolean | null
  filesLink?: string | null
  filename?: string | null
  poster?: string | null
  transcript?: string | null
  uploadDate?: string | null
  section?: Section
  attachments?: Attachment[] | null
  comments?: Comment[] | null
  playLogs?: PlayLog[] | null
  ugqs?: Ugq[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
}
export type SectionQuestion = {
  id?: number
  title?: string | null
  sectionId?: number
  lessonId?: number | null
  imageUrl?: string | null
  answer1?: string | null
  answerImage1?: string | null
  answer2?: string | null
  answerImage2?: string | null
  answer3?: string | null
  answerImage3?: string | null
  answer4?: string | null
  answerImage4?: string | null
  section?: Section
}
export type Section = {
  id?: number
  courseId?: number
  title?: string | null
  titleEn?: string | null
  weekNumber?: number
  description?: string | null
  priority?: number
  isPublished?: boolean | null
  filesLink?: string | null
  filenamePrefix?: string | null
  course?: Course
  lessons?: Lesson[] | null
  sectionQuestions?: SectionQuestion[] | null
}
export type UserMentorCredit = {
  id?: number
  mentorId?: number
  userId?: number
  courseId?: number
  usedCredit?: number
  totalCredit?: number
  insertDate?: string
  course?: Course
}
export type Course = {
  id?: number
  title?: string | null
  titleFa?: string | null
  totalDuration?: number | null
  imageUrl?: string | null
  categoryId?: number
  description?: string | null
  shortDescription?: string | null
  slug?: string | null
  isPublished?: boolean
  isFeatured?: boolean
  providerId?: number
  priority?: number | null
  superPremium?: boolean
  filesLink?: string | null
  lessonCount?: number | null
  category?: Category
  provider?: ContentProvider
  comments?: Comment[] | null
  companyAdminCredits?: CompanyAdminCredit[] | null
  companyCourseVisiblities?: CompanyCourseVisiblity[] | null
  courseQualifications?: CourseQualification[] | null
  courseTags?: CourseTag[] | null
  courseTeachers?: CourseTeacher[] | null
  enrolls?: Enroll[] | null
  exams?: Exam[] | null
  orderItems?: OrderItem[] | null
  quizzes?: Quiz[] | null
  sections?: Section[] | null
  userMentorCredits?: UserMentorCredit[] | null
}
export type Comment = {
  id?: number
  text?: string | null
  courseId?: number
  lessonId?: number | null
  userId?: number
  insertDate?: string
  approved?: boolean
  replyId?: number | null
  rate?: number
  course?: Course
  lesson?: Lesson
  user?: AspNetUser
}
export type SubStudyField = {
  id?: number
  studyFieldId?: number
  title?: string | null
  studyField?: StudyField
  educations?: Education[] | null
}
export type StudyField = {
  id?: number
  title?: string | null
  degreeId?: number | null
  educations?: Education[] | null
  subStudyFields?: SubStudyField[] | null
}
export type StudyPlaceType = {
  id?: number
  title?: string | null
  studyPlaces?: StudyPlace[] | null
}
export type StudyPlace = {
  id?: number
  title?: string | null
  typeId?: number | null
  type?: StudyPlaceType
  educations?: Education[] | null
}
export type Education = {
  id?: number
  userid?: number
  studyPlaceId?: number
  studyFieldId?: number
  studySubFieldId?: number | null
  startYear?: number
  endYear?: number | null
  gpa?: number | null
  degreeId?: number | null
  certificateImage?: string | null
  studyField?: StudyField
  studyPlace?: StudyPlace
  studySubField?: SubStudyField
  user?: AspNetUser
}
export type Language = {
  id?: number
  title?: string | null
  experienceLanguages?: ExperienceLanguage[] | null
}
export type ExperienceLanguage = {
  id?: number
  userId?: number
  languageId?: number
  level?: number
  certificateImage?: string | null
  language?: Language
  user?: AspNetUser
}
export type ExperienceEmployeeType = {
  id?: number
  title?: string | null
  experiences?: Experience[] | null
}
export type ExperienceIndustry = {
  id?: string | null
  title?: string | null
  sort?: number | null
  experiences?: Experience[] | null
}
export type Experience = {
  id?: number
  userId?: number
  company?: string | null
  jobTitle?: string | null
  startDate?: string
  endDate?: string | null
  employeeTypeId?: number
  location?: string | null
  industryId?: string | null
  employeeType?: ExperienceEmployeeType
  industry?: ExperienceIndustry
  user?: AspNetUser
}
export type Gift = {
  id?: number
  title?: string | null
  duration?: number
  giftUsages?: GiftUsage[] | null
}
export type GiftUsage = {
  id?: number
  userId?: number
  giftId?: number
  insertDate?: string
  gift?: Gift
  user?: AspNetUser
}
export type Payment = {
  id?: number
  userId?: number
  amount?: number
  tax?: number
  token?: string | null
  rrn?: string | null
  paid?: boolean
  gateway?: string | null
  package?: number
  duration?: number
  card?: string | null
  insertDate?: string | null
  user?: AspNetUser
}
export type Session = {
  id?: number
  userId?: number
  token?: string | null
  insertDate?: string
  expireDate?: string
  isActive?: boolean
  userAgent?: string | null
  ip?: number | null
  user?: AspNetUser
}
export type Suggestion = {
  id?: number
  userId?: number | null
  text?: string | null
  insertDate?: string
  user?: AspNetUser
}
export type UserVerification = {
  id?: number
  firstName?: string | null
  lastName?: string | null
  nationalCard?: string | null
  insertDate?: string
  isAccepted?: boolean
  isRejected?: boolean
  userId?: number
  nationalCode?: string | null
  user?: AspNetUser
}
export type Favorite = {
  id?: number
  title?: string | null
  users?: AspNetUser[] | null
}
export type AspNetRoleClaim = {
  id?: number
  roleId?: number
  claimType?: string | null
  claimValue?: string | null
  role?: AspNetRole
}
export type AspNetRole = {
  id?: number
  name?: string | null
  normalizedName?: string | null
  concurrencyStamp?: string | null
  aspNetRoleClaims?: AspNetRoleClaim[] | null
  users?: AspNetUser[] | null
}
export type AspNetUser = {
  id?: number
  userName?: string | null
  normalizedUserName?: string | null
  email?: string | null
  normalizedEmail?: string | null
  emailConfirmed?: boolean
  passwordHash?: string | null
  securityStamp?: string | null
  concurrencyStamp?: string | null
  phoneNumber?: string | null
  phoneNumberConfirmed?: boolean
  twoFactorEnabled?: boolean
  lockoutEnd?: string | null
  lockoutEnabled?: boolean
  accessFailedCount?: number
  joinDate?: string
  customerId?: number | null
  uuid?: string
  profile?: Profile
  aspNetUserClaims?: AspNetUserClaim[] | null
  aspNetUserLogins?: AspNetUserLogin[] | null
  aspNetUserTokens?: AspNetUserToken[] | null
  certificates?: Certificate[] | null
  comments?: Comment[] | null
  companyAdminCreditAdmins?: CompanyAdminCredit[] | null
  companyAdminCreditUsers?: CompanyAdminCredit[] | null
  companyAdmins?: CompanyAdmin[] | null
  companyMentorAccesses?: CompanyMentorAccess[] | null
  companyUserSegments?: CompanyUserSegment[] | null
  companyUsers?: CompanyUser[] | null
  educations?: Education[] | null
  enrolls?: Enroll[] | null
  examResults?: ExamResult[] | null
  exams?: Exam[] | null
  experienceLanguages?: ExperienceLanguage[] | null
  experiences?: Experience[] | null
  giftUsages?: GiftUsage[] | null
  orders?: Order[] | null
  payments?: Payment[] | null
  playLogs?: PlayLog[] | null
  premia?: Premium[] | null
  questions?: Question[] | null
  sessions?: Session[] | null
  skills?: Skill[] | null
  suggestions?: Suggestion[] | null
  ugqs?: Ugq[] | null
  userAnswers?: UserAnswer[] | null
  userLessonCompleteds?: UserLessonCompleted[] | null
  userVerifications?: UserVerification[] | null
  favorites?: Favorite[] | null
  roles?: AspNetRole[] | null
}
export type Premium = {
  id?: number
  userId?: number
  package?: number
  insertDate?: string
  untilDate?: string
  totalCredit?: number | null
  usedCredit?: number | null
  price?: number | null
  user?: AspNetUser
}
export type SubUser = {
  id?: number
  username?: string | null
}
export type UserMentor = {
  id?: number
  mentorId?: number
  userId?: number
  description?: string | null
}
export type UserInfo = {
  id?: number
  isMentor?: boolean
  fullname?: string | null
  premium?: Premium
  companyName?: string | null
  jobTitle?: string | null
  username?: string | null
  subUsers?: SubUser[] | null
  totalCredit?: number | null
  usedCredit?: number | null
  parentUser?: UserMentor
  isCompanyAdmin?: boolean
  logo?: string | null
  isInCompany?: boolean
  credits?: CompanyAdminCredit[] | null
  inCompanyTitle?: string | null
  inCompanyPrimaryColor?: string | null
  inCompanySecondaryColor?: string | null
  customer?: Customer
  birthDate?: string | null
  province?: string | null
  city?: string | null
  gender?: boolean | null
  discourseResponse?: string | null
  email?: string | null
  teacherId?: number | null
}
export type OptionType = {
  label?: string | null
  value?: string | null
}
export type SetInfoModel = {
  firstname?: string | null
  lastname?: string | null
  companyName?: string | null
  jobTitle?: string | null
  email?: string | null
  gender?: OptionType
  province?: OptionType
  city?: OptionType
  year?: OptionType
  month?: OptionType
  day?: OptionType
}
export type Token = {
  accessToken?: string | null
  accessTokenExpirationTime?: string
  refreshToken?: string | null
  refreshTokenExpirationTime?: string
  isNewUser?: boolean
  completedProfile?: boolean
  packageType?: number
  uuid?: string | null
}
export type SessionDto = {
  id?: number
  userAgent?: string | null
  insertDate?: string
}
export type VerfySignInByOtpCommand = {
  userName?: string | null
  code?: string | null
}
export type User = {
  id?: number
  userName?: string | null
  normalizedUserName?: string | null
  email?: string | null
  normalizedEmail?: string | null
  emailConfirmed?: boolean
  passwordHash?: string | null
  securityStamp?: string | null
  concurrencyStamp?: string | null
  phoneNumber?: string | null
  phoneNumberConfirmed?: boolean
  twoFactorEnabled?: boolean
  lockoutEnd?: string | null
  lockoutEnabled?: boolean
  accessFailedCount?: number
  customerId?: number | null
  joinDate?: string
  uuid?: string
}
export type UserWithCourse = {
  id?: number
  userName?: string | null
  normalizedUserName?: string | null
  email?: string | null
  normalizedEmail?: string | null
  emailConfirmed?: boolean
  passwordHash?: string | null
  securityStamp?: string | null
  concurrencyStamp?: string | null
  phoneNumber?: string | null
  phoneNumberConfirmed?: boolean
  twoFactorEnabled?: boolean
  lockoutEnd?: string | null
  lockoutEnabled?: boolean
  accessFailedCount?: number
  customerId?: number | null
  joinDate?: string
  uuid?: string
  coursesIds?: number[] | null
  password?: string | null
}
export type SetPasswordCommand = {
  newPassword: string
  confirmPassword?: string | null
  userName: string
}
export type AddSubUserForm = {
  userName?: string | null
}
export type UserSignInForm = {
  userName?: string | null
  password?: string | null
}
export type ForgotPasswordForm = {
  userName: string
}
export type ResetPasswordForm = {
  code?: string | null
  userName?: string | null
  newPassword?: string | null
}
export type CategoryCount = {
  id?: number
  title?: string | null
  count?: number
}
export type CommentDto = {
  text?: string | null
  author?: string | null
  courseId?: number
  lessonId?: number | null
  rate?: number
  id?: number | null
  insertDate?: string | null
}
export type CompanyUserDto = {
  id?: number
  isActive?: boolean
  userId?: number
  username?: string | null
  fullname?: string | null
  col1?: string | null
  colName1?: string | null
  colName2?: string | null
  col2?: string | null
  insertDate?: string
  usedCredit?: number
  courseCount?: number
  pendingCount?: number
}
export type CourseDto = {
  id?: number
  title?: string | null
  titleFa?: string | null
  totalDuration?: number | null
  lessonCount?: number | null
  imageUrl?: string | null
  categoryId?: number
  slug?: string | null
  category?: Category
  categoryTitle?: string | null
}
export type PlayLogDto = {
  action?: string | null
  lessonId?: number
  time?: number
  speed?: number
}
export type UserLessonViewMinute = {
  userId?: number
  courseId?: number
  lessonId?: number
  minute?: number | null
  quantity?: number | null
  speed?: number | null
}
export type CourseDetailDto = {
  id?: number
  errorMessage?: string | null
  title?: string | null
  titleFa?: string | null
  totalDuration?: number | null
  lessonCount?: number | null
  imageUrl?: string | null
  categoryId?: number
  slug?: string | null
  filesLink?: string | null
  description?: string | null
  superPremium?: boolean
  sections?: Section[] | null
  courseTeachers?: CourseTeacher[] | null
  category?: Category
  provider?: ContentProvider
  comments?: CommentDto[] | null
}
export type DistinctedPlayLog = {
  userId?: number
  courseId?: number
  seenMinutes?: number | null
  totalMinutes?: number | null
  titleFa?: string | null
  examQuestions?: number | null
}
export type CompanyAdminCreditDto = {
  id?: number
  adminId?: number
  userId?: number
  courseId?: number
  usedCredit?: number
  totalCredit?: number
  subUser?: SubUser
  course?: Course
}
export type AddCompanyAdminCreditDto = {
  userId?: number
  courseId?: number
  totalCredit?: number
  days?: number | null
}
export type MentorUserLog = {
  mentorId?: number
  userId?: number
  fullname?: string | null
  username?: string | null
  totalView?: number | null
}
export type CampaignPrice = {
  id?: number
  startDate?: string
  endDate?: string
  duration?: number
  amount?: number
  description?: string | null
  package?: number
}
export type Pricing = {
  duration?: number
  amount?: number
  package?: number
  campaign?: CampaignPrice
  title?: string | null
  badge?: string | null
}
export type CreateUgqModel = {
  question?: string | null
  answer1?: string | null
  answer2?: string | null
  answer3?: string | null
  answer4?: string | null
  lessonId?: number
  timeOfVideo?: number
}
export const {
  useSignInByOtpMutation,
  useCreditLogsAndCouponsQuery,
  useLazyCreditLogsAndCouponsQuery,
  useGetDiscountCodeMutation,
  useInfoMutation,
  useSetInfoMutation,
  useVerfySignInByOtpMutation,
  useFromInreMutation,
  useFromNamatekMutation,
  useSetUserPasswordMutation,
  useAddSubUserMutation,
  useSignInMutation,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useGetApiCategoriesQuery,
  useLazyGetApiCategoriesQuery,
  useGetApiCategoriesCountsQuery,
  useLazyGetApiCategoriesCountsQuery,
  useGetApiCategoriesByIdQuery,
  useLazyGetApiCategoriesByIdQuery,
  useCommentMutation,
  useCompanySegmentsQuery,
  useLazyCompanySegmentsQuery,
  useCompanyAdminCreditsQuery,
  useLazyCompanyAdminCreditsQuery,
  useAddCompanyAdminCreditMutation,
  useRequestCreditMutation,
  useCompanyUserQuery,
  useLazyCompanyUserQuery,
  useSetUserSegmentValueMutation,
  useSetUserFullnameMutation,
  useCompanyUsersQuery,
  useLazyCompanyUsersQuery,
  useSetActivationMutation,
  useSetCreditActivationMutation,
  useChangeCreditMutation,
  useGetCoursesQuery,
  useLazyGetCoursesQuery,
  useGetFeaturedQuery,
  useLazyGetFeaturedQuery,
  useSearchCourseQuery,
  useLazySearchCourseQuery,
  useByCategoryQuery,
  useLazyByCategoryQuery,
  useLogMutation,
  useSuperPremiumCoursesQuery,
  useLazySuperPremiumCoursesQuery,
  useMyQuery,
  useLazyMyQuery,
  useOthersQuery,
  useLazyOthersQuery,
  useGetApiCoursesByIdGraphQuery,
  useLazyGetApiCoursesByIdGraphQuery,
  useGetApiCoursesByIdAGraphQuery,
  useLazyGetApiCoursesByIdAGraphQuery,
  useGetApiCoursesByIdQuery,
  useLazyGetApiCoursesByIdQuery,
  useGetDistinctedPlayLogsQuery,
  useLazyGetDistinctedPlayLogsQuery,
  useGetGiftQuery,
  useLazyGetGiftQuery,
  useGetSubUsersCreditQuery,
  useLazyGetSubUsersCreditQuery,
  useAddSubUsersCreditMutation,
  useGetMentorshipUserLogsMutation,
  useGetAllOrdersQuery,
  useLazyGetAllOrdersQuery,
  useMyPaymentsQuery,
  useLazyMyPaymentsQuery,
  useReceiptQuery,
  useLazyReceiptQuery,
  usePricingQuery,
  useLazyPricingQuery,
  usePaymentQuery,
  useLazyPaymentQuery,
  useGetApiQualificationsQuery,
  useLazyGetApiQualificationsQuery,
  useGetApiQualificationsByIdQuery,
  useLazyGetApiQualificationsByIdQuery,
  useSuggestMutation,
  useGetApiTagsQuery,
  useLazyGetApiTagsQuery,
  useGetApiTagsByIdQuery,
  useLazyGetApiTagsByIdQuery,
  useCreateUgqMutation,
} = injectedRtkApi
