var fs = require('fs');

var fs1 = {
	mkdir(path) {
		var dirs,exist;
		if(typeof path=='string') {
			dirs = fs1.split(path);
		} else {
			dirs = [...path];
		}

		dirs.reduce((prev,next)=>{
			exist = fs.existsSync(prev+next);
			if(!exist) {
				fs.mkdirSync(prev+next);
			}
			return prev+next+"/";
		});
		console.log('新建目录成功')
		return dirs.join("/")
	},
	split(path) {
		var dirs = path.split('/'),
				first;
		if(dirs[0][0]=='\.') {
			dirs[0] = dirs[0]+"/";
		}
		return dirs;
	},
	touch(filename,content,rewrite) {
		var path = this.split(filename),
				file = path.pop();
		
		this.mkdir(path);

		var writer;
		if(rewrite) {
			//重写文件
			this.write(filename,content)
		} else {
			//不重写文件，文件不存在时才进行创建
			if(!fs.existsSync(filename)) {
				this.write(filename,content)
			}
		}
	},
	write(filename,content) {
		var writer = fs.createWriteStream(filename);
		content&&writer.write(content);
		console.log('文件写入成功')
	},
	remove(path) {
		var type = this.isType(path);
		switch(type) {
			case 'dir':
				fs.rmdirSync(path);
				break;
			case 'file':
				fs.unlinkSync(path);
				break;
			default:
				return false;
		}
		console.log('删除成功');
	},
	isType(path) {
		var stats = fs.statSync(path);
		if(stats.isDirectory()) {
			return 'dir'
		} else if(stats.isFile()){
			return 'file'
		} else {
			return false;
		}
	}
}

module.exports = fs1;