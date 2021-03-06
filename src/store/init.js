const KEY = 'KakaoAK 1ead7bdcf78403ae41f796dfa90b6bb6'
const WEB_URL = 'https://dapi.kakao.com/v2/search/web'
const CLIP_URL = 'https://dapi.kakao.com/v2/search/vclip'
const IMG_URL = 'https://dapi.kakao.com/v2/search/image'
const BLOG_URL = 'https://dapi.kakao.com/v2/search/blog'
const BOOK_URL = 'https://dapi.kakao.com/v3/search/book'

const genConfig = (payload) => {
	return {
		params: { ...payload },
		headers: { Authorization: KEY }
	}
}

const init = { WEB_URL, CLIP_URL, IMG_URL, BLOG_URL, BOOK_URL, genConfig }
export default init