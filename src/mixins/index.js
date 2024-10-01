const mixins = {
	methods: {
		/**
		 * Format harga
		 *
		 * @param {*} value
		 * @returns
		 */
		formatPrice(value) {
			let val = (value / 1).toFixed(0).replace(".", ",");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},

		/**
		 * Menghitung persentasi dari sebuah nilai
		 *
		 * @param {*} partialValue
		 * @param {*} totalValue
		 * @returns
		 */
		percentage(partialValue, totalValue) {
			return (100 * partialValue) / totalValue;
		},

		/**
		 * Method ini akan digunakan untuk mengaktifkan tombol donasi yang ada di dalam website. Jika tanggal sekarang melebihi dari tanggal yang ditentukan, atau tanggal sekarang sama dengan tanggal yang ditentukan, maka tombol untuk donasi akan di nonaktifkan.
		 *
		 * @param {*} maxDate
		 * @returns
		 */
		maxDate(maxDate) {
			let date = new Date();
			let now =
				date.getFullYear() +
				"-" +
				("0" + (date.getMonth() + 1)).slice(-2) +
				"-" +
				("0" + date.getDate()).slice(-2);

			// Jika tanggal sama
			if (now == maxDate) {
				return true;
			}

			// Jika tanggal sekarang lebih besar dari `maxDate`
			if (now > maxDate) {
				return true;
			}

			return false;
		},

		/**
		 * Menghitung jumlah hari antara tanggal sekarang sampai tanggal yang ditentukan
		 *
		 * @param {*} maxDate
		 * @returns
		 */
		countDay(maxDate) {
			let date = new Date();
			let now =
				date.getFullYear() +
				"-" +
				("0" + (date.getMonth() + 1)).slice(-2) +
				"-" +
				("0" + date.getDate()).slice(-2);
			let dt1 = new Date(now);
			let dt2 = new Date(maxDate);
			let result = Math.floor(
				(Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
					Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
					(1000 * 60 * 60 * 24)
			);
			if (result < 0) {
				return 0;
			}
			return result;
		},
	},
};

export default mixins;
