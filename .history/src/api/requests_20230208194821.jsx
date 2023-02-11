const eventsBaseUrl = "/events";

const requests = {
  fetchStickers: "/stickers",

  search: {
    searchBaseUrl: "/search",

    /** 검색 값 GET 요청(type : member, event, hashtag) */
    getSearch(type, query, page, limit) {
      return `${this.searchBaseUrl}?type=${type}&query=${query}&page=${page}&limite=${limit}`;
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
    },
  },
};
export default requests;
