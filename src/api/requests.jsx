const eventsBaseUrl = "/events";

const requests = {
  // fetchStickers: "/stickers",
  events: {

    album: {
      albumBaseUrl: "/album",

      /** 앨범 미디어 전체 GET 요청 */
      mediaAll(eventUid, page, limit) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}?page=${page}&limit=${limit}`;
      },

      /** 앨범에 미디어 추가 POST 요청 */
      postMedia(eventUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}`;
      },

      /** 앨범 미디어 상세 정보 GET 요청 */
      getDetail(eventUid, mediaUid) {
        return `${eventsBaseUrl}/${eventUid}${this.albumBaseUrl}/${mediaUid}`;
      },
    },
  },
};
export default requests;
