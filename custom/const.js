module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : '2b2056c9a037c674896144282143bd71',
	FB_PAGE_VERIFY_TOKEN : 'berusxinhgai', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAESo2fJXDUBAPlSAcjvUB5UyiRx9Gw0WU50xWysZCZBojHHBdjsDQKMBjR9RI92EcZARdlpSbYQxcQ1BBuZB5WgBcqXfmwUGyyTluXC4TlPnK5dqQZAMHYAqEYYrUJeCoUYYRQRIBeynN4IKnJyE3nRFK2Sm6NUZBkfOsKsRo9tkMGoaoAlJC',

	//HEROKU STUFFS
	APP_NAME : 'berus-bot',
	HEROKU_API_KEY : 'b66fb480-63bf-4463-b83c-a049c1f2b143',
	KEEP_APP_ALWAYS_ON : true, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb://berus:thangberus@thangberus-shard-00-00-sdose.gcp.mongodb.net:27017,thangberus-shard-00-01-sdose.gcp.mongodb.net:27017,thangberus-shard-00-02-sdose.gcp.mongodb.net:27017/test?ssl=true&replicaSet=thangberus-shard-0&authSource=admin&retryWrites=true',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://goo.gl/forms/FlqtshjdI9bMesSN2",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 50, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "thangberus" //password để login vào trang admin
};
