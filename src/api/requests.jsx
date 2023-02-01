const eventsBaseUrl = "/events";

const requests = {
  // fetchStickers: "/stickers",
  events: {

    album: {
      albumBaseUrl: "/album",
      commentBaseUrl: "/comments",

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
    },
  },
};
export default requests;
