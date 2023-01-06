const bcrypt = require('bcrypt');

module.exports = class BcryptService {
	async hash(password: any) {
		const salt = await bcrypt.genSalt(10);
		const pwd = await bcrypt.hash(password, salt);

		return pwd;
	}

	async compare(password: string, passwordCompare: string) {
		const match = await bcrypt.compare(passwordCompare, password);
		return match;
	}

	async generate() {
		// const pwd =
		// 	Math.random().toString(36).slice(7) +
		// 	Math.random().toString(36).toUpperCase().slice(7);

		// return pwd;

		var specials = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
		var lowercase = 'abcdefghijklmnopqrstuvwxyz';
		var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var numbers = '0123456789';
		var all = specials + lowercase + uppercase + numbers;

		var password = '';
		password += this.pick(specials, 2);
		password += this.pick(lowercase, 3);
		password += this.pick(uppercase, 3);
		password += this.pick(numbers, 3);
		password += this.pick(all, 3, 6);
		password = this.shuffle(password);
		return password;
	}

	shuffle(pwd: string) {
		var array = pwd.split('');
		var tmp,
			current,
			top = array.length;

		if (top)
			while (--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}

		return array.join('');
	}

	pick(char: string, min: number, max = 0) {
		var n,
			chars = '';

		if (max === 0) {
			n = min;
		} else {
			n = min + Math.floor(Math.random() * (max - min + 1));
		}

		for (var i = 0; i < n; i++) {
			chars += char.charAt(Math.floor(Math.random() * char.length));
		}

		return chars;
	}
};
