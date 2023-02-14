const eventsBaseUrl = "/events";

const requests = {
  fetchStickers: "/stickers",

  login: "/account/login",
  logout: "/account/logout",
  refreshToken: "/account/refresh-token",
  register: "/account/register",

  search: {
    searchBaseUrl: "/search",

    /** 검색 값 GET 요청(type : member, event, hashtag) */
    getSearch(type, keyword, page, size) {
      return `${this.searchBaseUrl}/${type}?keyword=${keyword}&page=${page}&size=${size}`;
    },
  },

  // 홈 화면에 있는 피드
  feed: {
    feedBaseUrl: "/feed",

    /** 피드 내용 GET 요청 */
    // 페이지네이션 물어보기
    getFeed(page, size) {
      return `${this.feedBaseUrl}?page=${page}&size=${size}`;
    },
  },

  // 게시물 CRUD
  posts: {
    postsBaseUrl: "/posts",
    commentsBaseUrl: "/comments",
    likeBase

    /** 게시물 POST 요청  */
    postPost() {
      return `${this.postsBaseUrl}`;
    },

    /** 게시물 상세 정보 GET 요청  */
    getPostDetail(postUid) {
      return `${this.postsBaseUrl}/${postUid}`;
    },

    /** 게시물 상세페이지 댓글 조회 GET 요청 */
    getPostComment(postUid, type, page, size) {
      return `${this.postsBaseUrl}/${postUid}${this.commentsBaseUrl}?type=${type}&page=${page}&size=${size}`;
    },

    /** 게시물 좋아요 GET 요청 */
    getPostLikes(postUid) {
      return `${this.postsBaseUrl}/${postUid}
    }
  },

  // 프로필
  profile: {
    profileBaseUrl: "/members",

    getProfileTop(memberId) {
      return `${this.profileBaseUrl}/profile/${memberId}`;
    },
    getProfileFeed(memberId, page, size) {
      return `${this.profileBaseUrl}/${memberId}/feed?page=${page}&size=${size}`;
    },
    getProfileRecievedEvents(memberId) {
      return `${this.profileBaseUrl}/${memberId}/received-events`;
    },
    getProfileBadges(memberId) {
      return `${this.profileBaseUrl}/${memberId}/badges`;
    },
    getProfileHostEvents(memberId) {
      return `${this.profileBaseUrl}/${memberId}/host-events`;
    },
    getProfileInvolvingEvents(memberId) {
      return `${this.profileBaseUrl}/${memberId}/involving-events`;
    },
    getProfileInvolvedEvents(memberId) {
      return `${this.profileBaseUrl}/${memberId}/involved-events`;
    },
    postProfilePicture() {
      return `${this.profileBaseUrl}/profile/picture`;
    },
    putProfileInfo() {
      return `${this.profileBaseUrl}/profile`;
    },
  },

  following: {
    followingBaseUrl: "/following",

    /** 팔로우 POST 요청 : body에 해당 {"id": value} 넣어주기 */
    postFollowing(followeeId) {
      return `${this.followingBaseUrl}/${followeeId}`;
    },

    /** 팔로우 취소 DEL 요청 : body에 해당 {"id": value} 넣어주기 */
    delFollowing(followeeId) {
      return `${this.followingBaseUrl}/${followeeId}`;
    },
  },

  // mypage follow 정보 조회
  myfollow: {
    myfollowerBaseUrl: "/followers",
    myfollowingBaseUrl: "/following",

    getMyFollowers(memberId, page, size) {
      return `${this.myfollowerBaseUrl}/${memberId}?page=${page}&size=${size}`;
    },
    getMyFollowings(memberId, page, size) {
      return `${this.myfollowingBaseUrl}/${memberId}?page=${page}&size=${size}`;
    },
  },

  hashtags: {
    hashtagsBaseUrl: "/hashtags",

    postLikes(hashtagUid) {
      return `${this.hashtagsBaseUrl}/${hashtagUid}`;
    },

    delLikes(hashtagUid) {
      return `${this.hashtagsBaseUrl}/${hashtagUid}`;
    },

    getResults(hashtagUid) {
      return `${this.hashtagsBaseUrl}/${hashtagUid}/events`;
    },
  },

  // 회원가입
  member: {
    memberBaseUrl: "/members",

    /** 회원가입 POST 요청 */
    postSignUp() {
      return `${this.memberBaseUrl}`;
    },
  },

  events: {
    postEvent: eventsBaseUrl,
    getEvent(type) {
      return `${eventsBaseUrl}?type=${type}`;
    },
    /** export(pangparty) page GET 요청 */
    getPangExport(eventUid) {
      return `${eventsBaseUrl}/${eventUid}/export`;
    },

    postHeaderImg(eventUid) {
      return `${eventsBaseUrl}/${eventUid}/header`;
    },

    album: {
      albumBaseUrl: "/album",
      commentBaseUrl: "/comments",
      likesBaseUrl: "/likes",

      /** 앨범 미디어 전체 GET 요청 */
      mediaAll(eventUid, page, size) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}?page=${page}&size=${size}`;
      },

      /** 앨범에 미디어 추가 POST 요청 */
      postMedia(eventUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}`;
      },

      /** 앨범에 미디어 삭제 DEL 요청 */
      delMedia(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}`;
      },

      /** 앨범 미디어 상세 정보 GET 요청 */
      getMediaDetail(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}`;
      },

      /** 앨범 미디어 댓글 리스트 GET 요청 */
      getMediaComment(eventUid, mediaUid, page, size) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.commentBaseUrl}?page=${page}&size=${size}`;
      },

      /** 앨범 미디어 댓글 추가 POST 요청 */
      postComment(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.commentBaseUrl}`;
      },

      /** 앨범 미디어 댓글 삭제 DEL 요청 */
      delComment(eventUid, mediaUid, commentUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.commentBaseUrl}/${commentUid}`;
      },

      /** 앨범 미디어 좋아요 목록 GET 요청 */
      getMediaLikes(eventUid, mediaUid, page, size) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.likesBaseUrl}?page=${page}&size=${size}`;
      },

      /** 앨범 미디어 좋아요 추가 POST 요청 */
      postLikes(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.likesBaseUrl}`;
      },

      /** 앨범 미디어 댓글 삭제 DEL 요청 */
      delLikes(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.likesBaseUrl}`;
      },
    },

    /** 롤링페이퍼 */
    rollingPaper: {
      rpBaseUrl: "/rollingpaper",
      stickerBaseUrl: "/stickers",

      /** 롤링페이퍼 스티커 목록 GET 요청 */
      rpStickerAll(eventUid, rollingPaperUid, topStart, topEnd) {
        return `${eventsBaseUrl}/${eventUid}${this.rpBaseUrl}/${rollingPaperUid}${this.stickerBaseUrl}?topStart=${topStart}&topEnd=${topEnd}`;
      },

      /** 롤링페이퍼 스티커 생성 POST 요청 */
      postSticker(eventUid, rollingPaperUid) {
        return `${eventsBaseUrl}/${eventUid}${this.rpBaseUrl}/${rollingPaperUid}${this.stickerBaseUrl}`;
      },

      // 롤링페이퍼 목록 GET 요청
      rpPieceAll(eventUid, rollingPaperUid, page, size) {
        return `${eventsBaseUrl}/${eventUid}${this.rpBaseUrl}/${rollingPaperUid}/pieces?page=${page}&size=${size}`;
      },

      // 롤링페이퍼 피스 생성 POST 요청
      postPiece(eventUid, rollingPaperUid) {
        return `${eventsBaseUrl}/${eventUid}${this.rpBaseUrl}/${rollingPaperUid}/pieces`;
      },
    },

    /** 이벤트 소개/참여 페이지 */
    introEvent: {
      pangBaseUrl: "/like",

      /** 이벤트 소개페이지 조회 GET 요청 */
      eventItroAll(eventUid) {
        return `${eventsBaseUrl}/${eventUid}`;
      },

      /** 이벤트 생성 */
      postEvent() {
        return `${eventsBaseUrl}`;
      },

      /** 이벤트 좋아요(팡파레 울리기) POST 요청 */
      postPang(eventUid) {
        return `${eventsBaseUrl}/${eventUid}${this.pangBaseUrl}`;
      },

      /** 이벤트 좋아요 취소 DELETE 요청 */
      deletePang(eventUid) {
        return `${eventsBaseUrl}/${eventUid}/dislike`;
      },
    },

    /** 이벤트 상세 페이지 조회 */
    // getEventDetail(eventId) {
    //   return `${eventsBaseUrl}/${eventId}`;
    // },
  },
};
export default requests;
