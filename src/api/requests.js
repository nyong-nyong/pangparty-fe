const eventsBaseUrl = "/events";

const requests = {
  fetchStickers: "/stickers",

  login: "/login",

  search: {
    searchBaseUrl: "/search",

    /** 검색 값 GET 요청(type : member, event, hashtag) */
    getSearch(type, keyword, page, limit) {
      return `${this.searchBaseUrl}/${type}?keyword=${keyword}&page=${page}&limit=${limit}`;
    },
  },

  following: {
    followingBaseUrl: "/following",

    /** 팔로우 POST 요청 : body에 해당 {"id": value} 넣어주기 */
    postFollowing() {
      return this.followingBaseUrl;
    },

    /** 팔로우 취소 DEL 요청 : body에 해당 {"id": value} 넣어주기 */
    delFollowing() {
      return this.followingBaseUrl;
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

    pang: {
      likesBaseUrl: "/likes",
      /** 이벤트 팡파레 울리기 POST 요청 */
      postPang(eventUid) {
        return `${eventsBaseUrl}/${eventUid}${this.likesBaseUrl}`;
      },

      /** 이벤트 팡파레 울리기 DEL 요청 */
      delPang(eventUid) {
        return `${eventsBaseUrl}/${eventUid}${this.likesBaseUrl}`;
      },
    },

    album: {
      albumBaseUrl: "/album",
      commentBaseUrl: "/comments",
      likesBaseUrl: "/likes",

      /** 앨범 미디어 전체 GET 요청 */
      mediaAll(eventUid, page, limit) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}?page=${page}&limit=${limit}`;
      },

      /** 앨범에 미디어 추가 POST 요청 */
      postMedia(eventUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}`;
      },

      /** 앨범 미디어 상세 정보 GET 요청 */
      getMediaDetail(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}`;
      },

      /** 앨범 미디어 댓글 리스트 GET 요청 */
      getMediaComment(eventUid, mediaUid, page, limit) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.commentBaseUrl}?page=${page}&limit=${limit}`;
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
      getMediaLikes(eventUid, mediaUid, page, limit) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}${this.likesBaseUrl}?page=${page}&limit=${limit}`;
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
      rpPieceAll(eventUid, rollingPaperUid, page, limit) {
        return `${eventsBaseUrl}/${eventUid}${this.rpBaseUrl}/${rollingPaperUid}/pieces/?pages=${page}&limit=${limit}`;
      },
    },
  },
};
export default requests;
