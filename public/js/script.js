document.addEventListener("DOMContentLoaded", async function () {
	const T2y_q8Z$36282_828 = document.querySelector("#f2");
	const T2y_q8Z$46282_828 = document.querySelector("#f3");
	const T2y_q8Z$16282_828 = 'dailyRequests';
	const T2y_q8Z$46272_828 = 'AllTimeRequests';
	const T2y_q8z$46272_828 = 'user';
	const T2y_Q8z$46272_828 = '6859577';

	async function T2y_Q8z$46273_828(r, c) {
		try {
			const T9y_w8z$42373_419 = await fetch(`https://api.count-service.workers.dev/getvalue?value=${r}&${T2y_q8z$46272_828}=${T2y_Q8z$46272_828}`);
			if (!T9y_w8z$42373_419.ok) {
				const err = await T9y_w8z$42373_419.json();
				console.error(`Error fetching ${r} count:`, err.message);
				c.innerHTML = `Error: ${err.message}`;
				return null;
			}
			const T9y_w8z$42373_412 = await T9y_w8z$42373_419.json();
			if (T9y_w8z$42373_412.status === 'success') {
				return T9y_w8z$42373_412.valueData;
			} else {
				console.error(`Failed to retrieve ${r} count:`, T9y_w8z$42373_412.message);
				c.innerHTML = `Error: ${T9y_w8z$42373_412.message}`;
			}
		} catch (err) {
			console.error("Network error:", err);
			c.innerHTML = "Error: Unable to fetch visitor count";
	}
	return 0;
	}

	async function T3y_Q8z$46273_828(r) {
		try {
			const T9y_w8z$42373_419 = await fetch(`https://api.count-service.workers.dev/plus?valueName=${r}&amount=1&${T2y_q8z$46272_828}=${T2y_Q8z$46272_828}`);
			if (!T9y_w8z$42373_419.ok) {
				const err = await T9y_w8z$42373_419.json();
				console.error(`Error incrementing ${r} count:`, err.message);
			}
		} catch (err) {
			console.error("Network error while incrementing:", err);
		}
	}

	async function T3y_Q8z$46373_828(r) {
			try {
			const T9y_w8z$42373_419 = await fetch(`https://api.count-service.workers.dev/setvalue?valueName=${r}&newValue=0&${T2y_q8z$46272_828}=${T2y_Q8z$46272_828}`);
			if (!T9y_w8z$42373_419.ok) {
				const err = await T9y_w8z$42373_419.json();
				console.error(`Error:`, err.message);
				return;
			}
		} catch (err) {
			console.error("Network Error:", err);
		}
	}

	try {
		await T3y_Q8z$46273_828(T2y_q8Z$16282_828);
		await T3y_Q8z$46273_828(T2y_q8Z$46272_828);
		let T5y_w8z$42351_TT = await T2y_Q8z$46273_828(T2y_q8Z$46272_828, T2y_q8Z$46282_828);
		let T5y_w8z$42351_DC = await T2y_Q8z$46273_828(T2y_q8Z$16282_828, T2y_q8Z$36282_828);
		
		if (T5y_w8z$42351_DC !== null) {
			T5y_w8z$42373_O0W(0, T5y_w8z$42351_DC, T2y_q8Z$36282_828);
		}
		if (T5y_w8z$42351_TT !== null) {
			T5y_w8z$42373_O0W(0, T5y_w8z$42351_TT, T2y_q8Z$46282_828);
		}
	} catch (err) {
		console.error("Error:", err);
	}

	function T5y_w8z$42373_w1w(n) {
		if (n >= 1e12) {
			let formatted = (n / 1e12).toFixed(1);
			return formatted.replace(/\.0$/, '') + (n % 1e12 === 0 ? 'T' : 'T+');
		} else if (n >= 1e9) {
			let formatted = (n / 1e9).toFixed(1);
			return formatted.replace(/\.0$/, '') + (n % 1e9 === 0 ? 'B' : 'B+');
		} else if (n >= 1e6) {
			let formatted = (n / 1e6).toFixed(1);
			return formatted.replace(/\.0$/, '') + (n % 1e6 === 0 ? 'M' : 'M+');
		} else if (n >= 1e3) {
			let formatted = (n / 1e3).toFixed(1);
		return formatted.replace(/\.0$/, '') + (n % 1e3 === 0 ? 'K' : 'K+');
		} else {
			return n.toString();
		}
	}

	function T5y_w8z$42373_O0W(T5y_w8z$42373_S, T5y_w8z$42373_E, container) {
		let T5y_w8z$42373_C = T5y_w8z$42373_S;
		let T5y_w8z$42373_d = T5y_w8z$42373_E < 10 ? 100 : T5y_w8z$42373_E < 50 ? 500 : T5y_w8z$42373_E < 100 ? 1000 : T5y_w8z$42373_E < 1000 ? 1250 : T5y_w8z$42373_E < 10000 ? 1500 : T5y_w8z$42373_E < 100000 ? 1800 : T5y_w8z$42373_E < 1000000 ? 2000 : 2500;
		const T5y_w8z$42373_I = (T5y_w8z$42373_E - T5y_w8z$42373_S) / (T5y_w8z$42373_d / 10);
		const T5y_w8z$42373_I2 = setInterval(() => {
			T5y_w8z$42373_C += T5y_w8z$42373_I;
			container.innerHTML = T5y_w8z$42373_w1w(Math.floor(T5y_w8z$42373_C));
			if (T5y_w8z$42373_C >= T5y_w8z$42373_E) {
				clearInterval(T5y_w8z$42373_I2);
			container.innerHTML = T5y_w8z$42373_w1w(T5y_w8z$42373_E);
			}
		}, 10);
	}

	function T3y_Q8z$44373_428() {
		const T7y_Q8z$44373_418 = new Date();
		const T9y_Q8z$42373_418 = new Date(T7y_Q8z$44373_418.toLocaleString('en-US', { timeZone: 'Africa/Mogadishu'}));
		const T9y_Q8z$42373_419 = new Date(T9y_Q8z$42373_418);
		T9y_Q8z$42373_419.setHours(24, 0, 0, 0);
		return T9y_Q8z$42373_419 - T9y_Q8z$42373_418;
	}

	function T3y_Q8z$44373_828() {
		const T5y_Q8z$44373_418 = T3y_Q8z$44373_428();
		setTimeout(() => {
			T3y_Q8z$46373_828(T2y_q8Z$16282_828);
			setInterval(() => {
				T3y_Q8z$46373_828(T2y_q8Z$16282_828);
		}, 86400000);
		}, T5y_Q8z$44373_418);
		console.log(`Scheduled to reset visitor counts in ${T5y_Q8z$44373_418 / 1000} seconds.`);
	}

	T3y_Q8z$44373_828();
});

document.getElementById("f1").addEventListener('click', function() {
	window.location.href = "playground.html";
});