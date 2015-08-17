$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
    items:
    [
			{
			'title' : '2012',
			'description'   : '',
			'thumbnail' : [''],
			'large' : [''],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : []
			},

			{
			'title' : '2013',
			'description'   : '',
			'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/6.jpg', 'img/portfolio/small/7.jpg', 'img/portfolio/small/8.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg', 'img/portfolio/small/17.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/6.jpg', 'img/portfolio/large/7.jpg', 'img/portfolio/large/8.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg', 'img/portfolio/large/17.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   : [],
			'tags'  : []
			},
        {
			'title' : '2014',
			'description'   : '',
			'thumbnail' : ['img/portfolio/small/2.jpg', 'img/portfolio/small/5.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/12.jpg', 'img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg'],
			'large' : ['img/portfolio/large/2.jpg', 'img/portfolio/large/5.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/12.jpg', 'img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg'],
			'button_list'   : [],
			'tags'  : []
			},
        {
			'title' : '2015',
			'description'   : '',
			'thumbnail' : [''],
			'large' : [''],
			'button_list'   : [],
			'tags'  : []
			},
        ]
	/*'items' :
		[
			{
			'title' : 'Gallery 1',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All','2012']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/4.jpg', 'img/portfolio/small/5.jpg', 'img/portfolio/small/6.jpg', 'img/portfolio/small/7.jpg'],
			'large' : ['img/portfolio/large/4.jpg', 'img/portfolio/large/5.jpg', 'img/portfolio/large/6.jpg', 'img/portfolio/large/7.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All','2013']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/15.jpg','img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/15.jpg','img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All','2014']
			},

			{
			'title' : 'Aubergine napa cabbage',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/12.jpg', 'img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg'],
			'large' : ['img/portfolio/large/12.jpg', 'img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All','2015']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/17.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/17.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All','2016']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/13.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/13.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Photoshop']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/7.jpg','img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/7.jpg','img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Design']
			},

			{
			'title' : 'Azuki bean',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/16.jpg', 'img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg'],
			'large' : ['img/portfolio/large/16.jpg', 'img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Jquery']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/18.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/18.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Wordpress']
			},

			{
			'title' : 'Winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/11.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/11.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Design']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/3.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/3.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Photoshop']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/5.jpg','img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/5.jpg','img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Jquery', 'Wordpress']
			},

			{
			'title' : 'Azuki bean',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/6.jpg', 'img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg'],
			'large' : ['img/portfolio/large/6.jpg', 'img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Wordpress']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/8.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/8.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Photoshop']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/9.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/9.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Jquery', 'Design']
			}
	 
		] */
	});
});
