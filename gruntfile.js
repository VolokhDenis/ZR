module.exports=function(grunt){
//Описание конфигурацию
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

				jshint: {
		    		options: {
		     		curly: true,
		      		eqeqeq: true,
		      		immed: true,
		      		latedef: true,
		      		newcap: true,
		      		noarg: true,
		      		sub: true,
		      		undef: true,
		     		eqnull: true,
		      		browser: true,
		      		globals: {
		        		jQuery: true,
		        		$:true ,
		        		console: true
		      			}
		    		},
		    		'<%= pkg.name %>':{
		    		src: [ 'src/js/header.js' ]
		    		}
		    	},   

		    	concat: {
		    		options:{
		    			stripBanners: true,
		    			banner: '/* <%= pkg.name %> -v <%= pkg.version %> - <%= grunt.template.today ("yyyy-mm-dd") %> */\n'
		    		},

		    		dist:{
		    			src: [ 'src/js/header.js' ],
		    			dest: 'dest/build.js' 
		    		}

		    	},

		    	uglify:{
		    		options:{
		    			stripBanners: true,
		    			banner: '/* <%= pkg.name %> -v <%= pkg.version %> - <%= grunt.template.today ("yyyy-mm-dd") %> */\n'
		    		},

		    		build:{
		    			src: 'dest/build.js',
		    			dest:'dest/build.min.js'
		    		}
		    	},

		    	cssmin: {
		    		with_banner: {
		    			options: {
				   			banner: '/* MINI CSS <%= pkg.name %> -v <%= pkg.version %> - <%= grunt.template.today ("yyyy-mm-dd") %> */\n'
		    			},

		    			files: { 
		    				//название выходного файла : [название файлов для конкатинации, Важно так как это css файлы, лучше вводить их названия по порядку]
		    				'dest/style.min.css' : ['src/css/style.css','src/css/header.css']
		    			}
		    		} 

		    	},

		    	watch:{
		    		scripts:{
			    		files: ['src/js/*.js'],
			    		tasks: ['jshint', 'concat','uglify','removelogging']
		    		},

		    		css:{
			    		files: ['src/css/*.css'],
			    		tasks: ['cssmin']
		    		}
		    	},

		    	removelogging: {
		    		dist:{
		    		src:'dest/build.min.js', 
		    		dest: 'dest/build.clean.min.js',
		    		}	
		    	}
		    	 
		    	
	});

//подгружаем необходимые плагины 
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-remove-logging');

//регистрируем задачу
grunt.registerTask('default',['jshint', 'concat','uglify', 'cssmin','removelogging', 'watch']);
grunt.registerTask('test',['']);

}; 