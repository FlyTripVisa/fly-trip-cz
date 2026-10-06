export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);

		// Simple API health endpoint
		if (url.pathname === "/api/health") {
			return Response.json({
				ok: true,
				service: "FLYTRIPVISA",
				status: "online",
				timestamp: new Date().toISOString(),
			});
		}

		const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
	<meta name="theme-color" content="#07110d">
	<meta name="description" content="FLYTRIPVISA — Visa, flights, hotels and travel services in one place.">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

	<title>FLYTRIPVISA — Travel Portal</title>

	<style>
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		:root {
			--bg: #f5f7f6;
			--surface: #ffffff;
			--surface-2: #f0f4f2;
			--text: #102019;
			--muted: #68756f;
			--primary: #08b968;
			--primary-dark: #079653;
			--border: #e3e9e6;
			--shadow: 0 10px 35px rgba(16, 32, 25, .08);
			--radius: 22px;
		}

		body.dark {
			--bg: #07110d;
			--surface: #0d1914;
			--surface-2: #13231c;
			--text: #f2faf6;
			--muted: #91a29a;
			--border: #20332a;
			--shadow: 0 12px 40px rgba(0,0,0,.25);
		}

		html {
			scroll-behavior: smooth;
		}

		body {
			font-family:
				Inter,
				-apple-system,
				BlinkMacSystemFont,
				"Segoe UI",
				Roboto,
				Arial,
				sans-serif;
			background: var(--bg);
			color: var(--text);
			min-height: 100vh;
			padding-bottom: 82px;
		}

		button,
		input,
		select {
			font: inherit;
		}

		button {
			cursor: pointer;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		.container {
			width: min(100% - 28px, 1100px);
			margin: auto;
		}

		/* HEADER */

		header {
			position: sticky;
			top: 0;
			z-index: 100;
			background: color-mix(in srgb, var(--bg) 88%, transparent);
			backdrop-filter: blur(18px);
			border-bottom: 1px solid var(--border);
		}

		.nav {
			height: 68px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.brand {
			display: flex;
			align-items: center;
			gap: 10px;
			font-weight: 900;
			letter-spacing: -.5px;
		}

		.logo {
			width: 40px;
			height: 40px;
			border-radius: 13px;
			display: grid;
			place-items: center;
			background: linear-gradient(135deg, #0bd477, #078f50);
			color: white;
			font-size: 21px;
			box-shadow: 0 8px 20px rgba(8,185,104,.25);
		}

		.brand small {
			display: block;
			font-size: 9px;
			letter-spacing: 1.8px;
			color: var(--muted);
			margin-top: 1px;
		}

		.nav-actions {
			display: flex;
			gap: 8px;
		}

		.icon-btn {
			width: 42px;
			height: 42px;
			border-radius: 13px;
			border: 1px solid var(--border);
			background: var(--surface);
			color: var(--text);
			display: grid;
			place-items: center;
			font-size: 18px;
		}

		/* HERO */

		.hero {
			padding: 34px 0 22px;
		}

		.hero-box {
			position: relative;
			overflow: hidden;
			border-radius: 30px;
			padding: 30px 24px;
			background:
				radial-gradient(circle at 90% 10%, rgba(38,255,155,.22), transparent 35%),
				linear-gradient(135deg, #071a11, #0b3423);
			color: white;
			box-shadow: 0 20px 55px rgba(0,70,40,.22);
		}

		.hero-box::after {
			content: "✈";
			position: absolute;
			right: 8%;
			bottom: -25px;
			font-size: 120px;
			opacity: .06;
			transform: rotate(-15deg);
		}

		.badge {
			display: inline-flex;
			align-items: center;
			gap: 7px;
			padding: 7px 11px;
			border-radius: 99px;
			background: rgba(255,255,255,.1);
			border: 1px solid rgba(255,255,255,.12);
			font-size: 11px;
			font-weight: 700;
			margin-bottom: 16px;
		}

		.dot {
			width: 7px;
			height: 7px;
			border-radius: 50%;
			background: #31e68d;
			box-shadow: 0 0 10px #31e68d;
		}

		.hero h1 {
			font-size: clamp(30px, 8vw, 58px);
			line-height: 1.02;
			letter-spacing: -2px;
			max-width: 680px;
			margin-bottom: 13px;
		}

		.hero h1 span {
			color: #35e78f;
		}

		.hero p {
			color: #b9cec3;
			font-size: 14px;
			line-height: 1.7;
			max-width: 580px;
			margin-bottom: 22px;
		}

		.hero-actions {
			display: flex;
			flex-wrap: wrap;
			gap: 9px;
		}

		.btn {
			border: 0;
			border-radius: 13px;
			padding: 13px 17px;
			font-weight: 800;
			font-size: 13px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
			transition: .2s ease;
		}

		.btn:active {
			transform: scale(.97);
		}

		.btn-primary {
			background: var(--primary);
			color: #03150c;
		}

		.btn-light {
			background: rgba(255,255,255,.1);
			color: white;
			border: 1px solid rgba(255,255,255,.15);
		}

		/* SEARCH */

		.search-card {
			margin-top: -1px;
			padding: 17px;
			border: 1px solid var(--border);
			background: var(--surface);
			border-radius: 20px;
			box-shadow: var(--shadow);
		}

		.search-title {
			font-weight: 800;
			font-size: 15px;
			margin-bottom: 12px;
		}

		.search-row {
			display: flex;
			gap: 8px;
		}

		.search-input {
			flex: 1;
			min-width: 0;
			border: 1px solid var(--border);
			background: var(--surface-2);
			color: var(--text);
			border-radius: 13px;
			padding: 13px 14px;
			outline: none;
		}

		.search-input:focus {
			border-color: var(--primary);
		}

		.search-button {
			width: 48px;
			border: 0;
			border-radius: 13px;
			background: var(--primary);
			color: #03150c;
			font-size: 18px;
		}

		/* SECTIONS */

		section {
			padding: 25px 0 5px;
		}

		.section-head {
			display: flex;
			align-items: end;
			justify-content: space-between;
			margin-bottom: 13px;
		}

		.section-head h2 {
			font-size: 20px;
			letter-spacing: -.5px;
		}

		.section-head p {
			color: var(--muted);
			font-size: 11px;
			margin-top: 4px;
		}

		.view-all {
			font-size: 12px;
			color: var(--primary-dark);
			font-weight: 800;
		}

		body.dark .view-all {
			color: #39df91;
		}

		/* SERVICES */

		.services {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}

		.service {
			padding: 17px;
			background: var(--surface);
			border: 1px solid var(--border);
			border-radius: 18px;
			box-shadow: 0 5px 20px rgba(0,0,0,.035);
			transition: transform .2s ease;
		}

		.service:active {
			transform: scale(.98);
		}

		.service-icon {
			width: 42px;
			height: 42px;
			display: grid;
			place-items: center;
			border-radius: 13px;
			background: rgba(8,185,104,.1);
			font-size: 20px;
			margin-bottom: 12px;
		}

		.service h3 {
			font-size: 14px;
			margin-bottom: 5px;
		}

		.service p {
			color: var(--muted);
			font-size: 11px;
			line-height: 1.5;
		}

		/* DESTINATIONS */

		.destinations {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
		}

		.destination {
			position: relative;
			min-height: 145px;
			border-radius: 19px;
			overflow: hidden;
			background: linear-gradient(135deg, #17362a, #0a1711);
			display: flex;
			align-items: flex-end;
			padding: 15px;
			color: white;
			box-shadow: var(--shadow);
		}

		.destination::before {
			content: "";
			position: absolute;
			inset: 0;
			background: radial-gradient(circle at 80% 20%, rgba(45,225,145,.3), transparent 35%);
		}

		.destination .flag {
			position: absolute;
			right: 13px;
			top: 13px;
			font-size: 25px;
		}

		.destination-content {
			position: relative;
			z-index: 1;
		}

		.destination h3 {
			font-size: 17px;
			margin-bottom: 3px;
		}

		.destination p {
			color: #b8cfc4;
			font-size: 10px;
		}

		/* QUICK FORM */

		.form-card {
			background: var(--surface);
			border: 1px solid var(--border);
			border-radius: 22px;
			padding: 18px;
			box-shadow: var(--shadow);
		}

		.form-grid {
			display: grid;
			gap: 10px;
		}

		.field label {
			display: block;
			font-size: 11px;
			font-weight: 700;
			color: var(--muted);
			margin-bottom: 6px;
		}

		.field input,
		.field select {
			width: 100%;
			border: 1px solid var(--border);
			background: var(--surface-2);
			color: var(--text);
			padding: 13px;
			border-radius: 12px;
			outline: none;
		}

		.field input:focus,
		.field select:focus {
			border-color: var(--primary);
		}

		.form-submit {
			width: 100%;
			margin-top: 4px;
			background: var(--primary);
			color: #03150c;
		}

		/* STATS */

		.stats {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 8px;
			margin-top: 20px;
		}

		.stat {
			text-align: center;
			background: var(--surface);
			border: 1px solid var(--border);
			border-radius: 16px;
			padding: 15px 6px;
		}

		.stat strong {
			display: block;
			font-size: 19px;
			color: var(--primary);
		}

		.stat span {
			color: var(--muted);
			font-size: 9px;
		}

		/* FOOTER */

		footer {
			margin-top: 35px;
			padding: 25px 0 15px;
			border-top: 1px solid var(--border);
			color: var(--muted);
			font-size: 11px;
			text-align: center;
		}

		/* BOTTOM NAV */

		.bottom-nav {
			position: fixed;
			z-index: 200;
			bottom: 0;
			left: 0;
			right: 0;
			height: calc(68px + env(safe-area-inset-bottom));
			padding-bottom: env(safe-area-inset-bottom);
			background: color-mix(in srgb, var(--surface) 94%, transparent);
			backdrop-filter: blur(18px);
			border-top: 1px solid var(--border);
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		.bottom-nav a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 4px;
			color: var(--muted);
			font-size: 10px;
			font-weight: 700;
		}

		.bottom-nav a span:first-child {
			font-size: 19px;
		}

		.bottom-nav a.active {
			color: var(--primary-dark);
		}

		body.dark .bottom-nav a.active {
			color: #39df91;
		}

		/* TOAST */

		.toast {
			position: fixed;
			left: 50%;
			bottom: 88px;
			transform: translate(-50%, 20px);
			background: #102019;
			color: white;
			padding: 11px 15px;
			border-radius: 12px;
			font-size: 12px;
			font-weight: 700;
			opacity: 0;
			pointer-events: none;
			transition: .25s ease;
			z-index: 500;
			white-space: nowrap;
			box-shadow: 0 10px 30px rgba(0,0,0,.25);
		}

		.toast.show {
			opacity: 1;
			transform: translate(-50%, 0);
		}

		/* DESKTOP */

		@media (min-width: 650px) {
			body {
				padding-bottom: 0;
			}

			.container {
				width: min(92%, 1100px);
			}

			.hero {
				padding-top: 45px;
			}

			.hero-box {
				padding: 55px;
			}

			.services {
				grid-template-columns: repeat(4, 1fr);
			}

			.destinations {
				grid-template-columns: repeat(4, 1fr);
			}

			.form-grid {
				grid-template-columns: 1fr 1fr 1fr auto;
				align-items: end;
			}

			.form-submit {
				width: auto;
				margin-top: 0;
			}

			.bottom-nav {
				display: none;
			}

			footer {
				padding-bottom: 35px;
			}
		}
	</style>
</head>

<body>

	<header>
		<div class="container nav">
			<a href="#" class="brand">
				<div class="logo">✈</div>
				<div>
					FLYTRIPVISA
					<small>TRAVEL • VISA • FLIGHTS</small>
				</div>
			</a>

			<div class="nav-actions">
				<button class="icon-btn" id="themeBtn" aria-label="Toggle theme">☾</button>
				<button class="icon-btn" id="menuBtn" aria-label="Menu">☰</button>
			</div>
		</div>
	</header>

	<main>

		<div class="container">

			<section class="hero">
				<div class="hero-box">
					<div class="badge">
						<span class="dot"></span>
						TRAVEL ASSISTANCE ONLINE
					</div>

					<h1>
						Your journey.<br>
						<span>Our expertise.</span>
					</h1>

					<p>
						Apply for visas, discover destinations, book flights and hotels —
						all from one simple travel portal.
					</p>

					<div class="hero-actions">
						<a href="#visa" class="btn btn-primary">
							🚀 Apply for Visa
						</a>

						<a href="#services" class="btn btn-light">
							Explore Services
						</a>
					</div>
				</div>
			</section>

			<div class="search-card">
				<div class="search-title">🔎 What are you looking for?</div>

				<div class="search-row">
					<input
						id="searchInput"
						class="search-input"
						type="search"
						placeholder="Visa, country, flight, hotel..."
						autocomplete="off"
					>

					<button class="search-button" id="searchBtn">
						⌕
					</button>
				</div>
			</div>

			<section id="services">
				<div class="section-head">
					<div>
						<h2>Our Services</h2>
						<p>Everything you need for your journey</p>
					</div>
				</div>

				<div class="services">

					<a href="#visa" class="service">
						<div class="service-icon">🛂</div>
						<h3>Visa Services</h3>
						<p>Visa assistance for destinations worldwide.</p>
					</a>

					<a href="#flights" class="service">
						<div class="service-icon">✈️</div>
						<h3>Flight Booking</h3>
						<p>Find flights and plan your next journey.</p>
					</a>

					<a href="#hotels" class="service">
						<div class="service-icon">🏨</div>
						<h3>Hotels</h3>
						<p>Comfortable stays at your destination.</p>
					</a>

					<a href="#business" class="service">
						<div class="service-icon">💼</div>
						<h3>Business Setup</h3>
						<p>Business and company setup assistance.</p>
					</a>

				</div>
			</section>

			<section>
				<div class="section-head">
					<div>
						<h2>Popular Destinations</h2>
						<p>Start planning your next trip</p>
					</div>
					<a href="#visa" class="view-all">View all →</a>
				</div>

				<div class="destinations">

					<a class="destination" href="#visa">
						<span class="flag">🇨🇳</span>
						<div class="destination-content">
							<h3>China</h3>
							<p>Visa assistance</p>
						</div>
					</a>

					<a class="destination" href="#visa">
						<span class="flag">🇯🇵</span>
						<div class="destination-content">
							<h3>Japan</h3>
							<p>Explore Japan</p>
						</div>
					</a>

					<a class="destination" href="#visa">
						<span class="flag">🇦🇪</span>
						<div class="destination-content">
							<h3>UAE</h3>
							<p>Dubai & Abu Dhabi</p>
						</div>
					</a>

					<a class="destination" href="#visa">
						<span class="flag">🇪🇺</span>
						<div class="destination-content">
							<h3>Europe</h3>
							<p>Schengen assistance</p>
						</div>
					</a>

				</div>
			</section>

			<section id="visa">
				<div class="section-head">
					<div>
						<h2>Quick Visa Check</h2>
						<p>Tell us where you want to travel</p>
					</div>
				</div>

				<div class="form-card">

					<div class="form-grid">

						<div class="field">
							<label>Destination</label>
							<select id="destination">
								<option value="">Select country</option>
								<option>China</option>
								<option>Japan</option>
								<option>Malaysia</option>
								<option>Thailand</option>
								<option>Australia</option>
								<option>New Zealand</option>
								<option>Canada</option>
								<option>United States</option>
								<option>Europe / Schengen</option>
								<option>Russia</option>
								<option>Brazil</option>
								<option>Mexico</option>
							</select>
						</div>

						<div class="field">
							<label>Passport Country</label>
							<input id="passport" type="text" placeholder="e.g. Bangladesh">
						</div>

						<div class="field">
							<label>Travel Date</label>
							<input id="travelDate" type="date">
						</div>

						<button class="btn form-submit" id="checkVisa">
							Check Visa →
						</button>

					</div>

				</div>
			</section>

			<section id="flights">
				<div class="section-head">
					<div>
						<h2>✈️ Flights</h2>
						<p>Plan your route with ease</p>
					</div>
				</div>

				<div class="form-card">
					<p style="font-size:13px;line-height:1.7;color:var(--muted);">
						Search and arrange flight bookings through our travel assistance team.
					</p>

					<button
						class="btn btn-primary"
						style="margin-top:13px;width:100%;"
						onclick="showToast('Flight booking service selected')"
					>
						Search Flights
					</button>
				</div>
			</section>

			<section id="hotels">
				<div class="section-head">
					<div>
						<h2>🏨 Hotels</h2>
						<p>Find a comfortable place to stay</p>
					</div>
				</div>

				<div class="form-card">
					<p style="font-size:13px;line-height:1.7;color:var(--muted);">
						Hotel reservation assistance for your international trip.
					</p>

					<button
						class="btn btn-primary"
						style="margin-top:13px;width:100%;"
						onclick="showToast('Hotel booking service selected')"
					>
						Find Hotels
					</button>
				</div>
			</section>

			<section id="business">
				<div class="section-head">
					<div>
						<h2>💼 Business Setup</h2>
						<p>Build your international business</p>
					</div>
				</div>

				<div class="form-card">
					<p style="font-size:13px;line-height:1.7;color:var(--muted);">
						Business setup and travel support for entrepreneurs and companies.
					</p>

					<button
						class="btn btn-primary"
						style="margin-top:13px;width:100%;"
						onclick="showToast('Business service selected')"
					>
						Get Assistance
					</button>
				</div>
			</section>

			<div class="stats">
				<div class="stat">
					<strong>150+</strong>
					<span>Countries</span>
				</div>

				<div class="stat">
					<strong>24/7</strong>
					<span>Online Support</span>
				</div>

				<div class="stat">
					<strong>1</strong>
					<span>Travel Portal</span>
				</div>
			</div>

		</div>

	</main>

	<footer>
		<div class="container">
			<strong style="color:var(--text);">FLYTRIPVISA</strong>
			<br><br>
			© ${new Date().getFullYear()} FLYTRIPVISA. All rights reserved.
			<br>
			Visa • Flights • Hotels • Business
		</div>
	</footer>

	<nav class="bottom-nav">

		<a href="#" class="active">
			<span>⌂</span>
			Home
		</a>

		<a href="#visa">
			<span>🛂</span>
			Visa
		</a>

		<a href="#flights">
			<span>✈️</span>
			Flights
		</a>

		<a href="#hotels">
			<span>🏨</span>
			Hotels
		</a>

	</nav>

	<div class="toast" id="toast"></div>

	<script>
		// Theme
		const themeBtn = document.getElementById("themeBtn");

		const savedTheme = localStorage.getItem("flytripvisa-theme");

		if (savedTheme === "dark") {
			document.body.classList.add("dark");
			themeBtn.textContent = "☀";
		}

		themeBtn.addEventListener("click", () => {
			document.body.classList.toggle("dark");

			const dark = document.body.classList.contains("dark");

			localStorage.setItem(
				"flytripvisa-theme",
				dark ? "dark" : "light"
			);

			themeBtn.textContent = dark ? "☀" : "☾";
		});

		// Toast
		function showToast(message) {
			const toast = document.getElementById("toast");

			toast.textContent = message;
			toast.classList.add("show");

			setTimeout(() => {
				toast.classList.remove("show");
			}, 2200);
		}

		// Menu
		document.getElementById("menuBtn").addEventListener("click", () => {
			showToast("Menu coming soon");
		});

		// Search
		const searchInput = document.getElementById("searchInput");

		document.getElementById("searchBtn").addEventListener("click", () => {
			const value = searchInput.value.trim();

			if (!value) {
				showToast("Please enter a destination or service");
				searchInput.focus();
				return;
			}

			showToast("Searching for: " + value);
		});

		searchInput.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				document.getElementById("searchBtn").click();
			}
		});

		// Visa checker
		document.getElementById("checkVisa").addEventListener("click", () => {

			const destination =
				document.getElementById("destination").value;

			const passport =
				document.getElementById("passport").value.trim();

			if (!destination) {
				showToast("Please select your destination");
				return;
			}

			if (!passport) {
				showToast("Please enter your passport country");
				return;
			}

			showToast(
				"Checking " +
				destination +
				" visa for " +
				passport
			);
		});

		// Prevent empty demo links
		document.querySelectorAll('a[href="#"]').forEach(link => {
			link.addEventListener("click", event => {
				event.preventDefault();
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			});
		});
	</script>

</body>
</html>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html; charset=UTF-8",
				"cache-control": "public, max-age=60",
			},
		});
	},
} satisfies ExportedHandler;