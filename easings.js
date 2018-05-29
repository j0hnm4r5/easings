const GenericEases = {
	easeIn: (power) => {
		return (t) => {
			return Math.pow(t, power);
		};
	},
	easeOut: (power) => {
		return (t) => {
			return 1 - Math.abs(Math.pow(t - 1, power));
		};
	},
	easeInOut: (power) => {
		return (t) => {
			return t < 0.5
				? GenericEases.easeIn(power)(t * 2) / 2
				: GenericEases.easeOut(power)(t * 2 - 1) / 2 + 0.5;
		};
	},
};

export const Easings = {
	// GENERIC EASES =========
	easeIn: (p) => {
		return GenericEases.easeIn(p);
	},
	easeOut: (p) => {
		return GenericEases.easeOut(p);
	},
	easeInOut: (p) => {
		return GenericEases.easeInOut(p);
	},

	// LINEAR =========
	easeLinear: GenericEases.easeInOut(1),

	// QUADRATIC =========
	easeInQuad: GenericEases.easeIn(2),
	easeOutQuad: GenericEases.easeOut(2),
	easeInOutQuad: GenericEases.easeInOut(2),

	// CUBIC =========
	easeInCubic: GenericEases.easeIn(3),
	easeOutCubic: GenericEases.easeOut(3),
	easeInOutCubic: GenericEases.easeInOut(3),

	// QUARTIC =========
	easeInQuart: GenericEases.easeIn(4),
	easeOutQuart: GenericEases.easeOut(4),
	easeInOutQuart: GenericEases.easeInOut(4),

	// QUINTIC =========
	easeInQuint: GenericEases.easeIn(5),
	easeOutQuint: GenericEases.easeOut(5),
	easeInOutQuint: GenericEases.easeInOut(5),

	// SINE =========
	easeInSine: (t) => {
		return 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
	},
	easeOutSine: (t) => {
		return Math.sin((Math.PI / 2) * t);
	},
	easeInOutSine: (t) => {
		return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
	},

	// CIRCULAR =========
	easeInCirc: (t) => {
		return 1 - Math.sqrt(1 - t * t);
	},
	easeOutCirc: (t) => {
		return Math.sqrt((2 - t) * t);
	},
	easeInOutCirc: (t) => {
		if (t < 0.5) {
			return 0.5 * (1 - Math.sqrt(1 - 4 * (t * t)));
		}
		return 0.5 * (Math.sqrt(-(2 * t - 3) * (2 * t - 1)) + 1);
	},

	// EXPONENTIAL =========
	easeInExpo: (t) => {
		return t === 0.0 ? t : Math.pow(2, 10 * (t - 1));
	},
	easeOutExpo: (t) => {
		return t === 1.0 ? t : 1 - Math.pow(2, -10 * t);
	},
	easeInOutExpo: (t) => {
		if (t === 0.0 || t === 1.0) return t;

		if (t < 0.5) {
			return 0.5 * Math.pow(2, 20 * t - 10);
		}
		return -0.5 * Math.pow(2, -20 * t + 10) + 1;
	},

	// ELASTIC =========
	easeInElastic: (t) => {
		return Math.sin(13 * (Math.PI * 2) * t) * Math.pow(2, 10 * (t - 1));
	},
	easeOutElastic: (t) => {
		return Math.sin(-13 * (Math.PI * 2) * (t + 1)) * Math.pow(2, -10 * t) + 1;
	},
	easeInOutElastic: (t) => {
		if (t < 0.5) {
			return (
				0.5 *
				Math.sin(13 * (Math.PI * 2) * (2 * t)) *
				Math.pow(2, 10 * (2 * t - 1))
			);
		}
		return (
			0.5 *
			(Math.sin(-13 * (Math.PI * 2) * (2 * t - 1 + 1)) *
				Math.pow(2, -10 * (2 * t - 1)) +
				2)
		);
	},

	// BACK =========
	easeInBack: (t) => {
		return t * t * t - t * Math.sin(t * Math.PI);
	},
	easeOutBack: (t) => {
		const f = 1 - t;
		return 1 - (f * f * f - f * Math.sin(f * Math.PI));
	},
	easeInOutBack: (t) => {
		if (t < 0.5) {
			const f = 2 * t;
			return 0.5 * (f * f * f - f * Math.sin(f * Math.PI));
		}
		const f = 1 - (2 * t - 1);
		return 0.5 * (1 - (f * f * f - f * Math.sin(f * Math.PI))) + 0.5;
	},

	// BOUNCE =========
	easeInBounce: (t) => {
		return Easings.easeOutBounce(1 - t);
	},
	easeOutBounce: (t) => {
		if (t < 4 / 11.0) {
			return (121 * t * t) / 16.0;
		}
		if (t < 8 / 11.0) {
			return (363 / 40.0) * t * t - (99 / 10.0) * t + 17 / 5.0;
		}
		if (t < 9 / 10.0) {
			return (4356 / 361.0) * t * t - (35442 / 1805.0) * t + 16061 / 1805.0;
		}
		return (54 / 5.0) * t * t - (513 / 25.0) * t + 268 / 25.0;
	},
	easeInOutBounce: (t) => {
		if (t < 0.5) {
			return 0.5 * Easings.easeInBounce(t * 2);
		}
		return 0.5 * Easings.easeOutBounce(t * 2 - 1) + 0.5;
	},
};
