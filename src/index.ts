export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === "/api/health") {
			return Response.json({
				ok: true,
				service: "FLYTRIPVISA",
				status: "online",
				time: new Date().toISOString(),
			});
		}

		const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
	>

	<meta name="theme-color" content="#07110d">
	<meta
		name="description"
		content="FLYTRIPVISA — Visa, flights, hotels and international travel services."
	>

	<title>FLYTRIPVISA — Travel Portal</title>

	<style>
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		:root {
			--bg: #f4f7f5;
			--surface: #ffffff;
			--surface-2: #f0f4f2;
			--text: #102019;
			--muted: #708079;
			--primary: #08b968;
			--primary-dark: #078e51;
			--border: #e1e9e5;
			--shadow: 0 10px 35px rgba(16, 32, 25, .07);
			--radius: 20px;
		}

		body.dark {
			--bg: #06100c;
			--surface: #0d1914;
			--surface-2: #13231c;
			--text: #f2faf6;
			--muted: #8fa39a;
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

			padding-bottom: 96px;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		button,
		input,
		select {
			font: inherit;
		}

		button {
			cursor: pointer;
		}

		.container {
			width: min(100% - 28px, 1120px);
			margin: auto;
		}

		/* =========================================================
		   PREMIUM MOBILE HEADER
		========================================================= */

		.top-header {
			position: sticky;
			top: 0;
			z-index: 1000;

			padding-top: env(safe-area-inset-top);

			background:
				color-mix(
					in srgb,
					var(--bg) 86%,
					transparent
				);

			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);

			border-bottom: 1px solid var(--border);
		}

		.header-inner {
			height: 64px;

			display: flex;
			align-items: center;
			justify-content: space-between;

			gap: 12px;
		}

		/* BRAND */

		.brand {
			display: flex;
			align-items: center;
			gap: 10px;

			min-width: 0;
		}

		.brand-logo {
			position: relative;

			width: 39px;
			height: 39px;

			flex: 0 0 39px;

			border-radius: 13px;

			display: grid;
			place-items: center;

			color: white;

			font-size: 19px;

			background:
				linear-gradient(
					135deg,
					#16dc7b,
					#068f50
				);

			box-shadow:
				0 7px 18px rgba(8,185,104,.22);
		}

		.brand-logo::after {
			content: "";

			position: absolute;

			width: 7px;
			height: 7px;

			right: 3px;
			top: 3px;

			border-radius: 50%;

			background: #a8ffd1;

			box-shadow: 0 0 9px #6affae;
		}

		.brand-text {
			min-width: 0;
		}

		.brand-name {
			font-size: 14px;
			font-weight: 900;

			letter-spacing: -.3px;

			white-space: nowrap;
		}

		.brand-subtitle {
			margin-top: 2px;

			font-size: 8px;
			font-weight: 700;

			letter-spacing: 1.4px;

			color: var(--muted);

			white-space: nowrap;
		}

		/* HEADER ACTIONS */

		.header-actions {
			display: flex;
			align-items: center;
			gap: 7px;
		}

		.header-btn {
			width: 39px;
			height: 39px;

			border-radius: 12px;

			border: 1px solid var(--border);

			background: var(--surface);

			color: var(--text);

			display: grid;
			place-items: center;

			font-size: 17px;

			transition:
				transform .18s ease,
				background .18s ease;
		}

		.header-btn:active {
			transform: scale(.91);
		}

		.header-profile {
			background: var(--primary);
			color: #03140c;

			border-color: transparent;

			font-size: 15px;
			font-weight: 900;
		}

		/* =========================================================
		   HERO
		========================================================= */

		.hero {
			padding: 26px 0 20px;
		}

		.hero-box {
			position: relative;

			overflow: hidden;

			border-radius: 28px;

			padding: 27px 22px;

			color: white;

			background:
				radial-gradient(
					circle at 90% 0%,
					rgba(40,255,155,.20),
					transparent 35%
				),
				linear-gradient(
					135deg,
					#071a11,
					#0b3423
				);

			box-shadow:
				0 20px 55px rgba(0,70,40,.20);
		}

		.hero-box::after {
			content: "✈";

			position: absolute;

			right: 4%;
			bottom: -35px;

			font-size: 130px;

			opacity: .055;

			transform: rotate(-15deg);
		}

		.badge {
			display: inline-flex;
			align-items: center;
			gap: 7px;

			padding: 7px 10px;

			border-radius: 999px;

			background: rgba(255,255,255,.09);

			border: 1px solid rgba(255,255,255,.12);

			font-size: 10px;
			font-weight: 800;

			margin-bottom: 15px;
		}

		.badge-dot {
			width: 6px;
			height: 6px;

			border-radius: 50%;

			background: #36ed92;

			box-shadow: 0 0 10px #36ed92;
		}

		.hero h1 {
			position: relative;
			z-index: 1;

			font-size: clamp(31px, 8vw, 58px);

			line-height: 1.02;

			letter-spacing: -2px;

			margin-bottom: 13px;
		}

		.hero h1 span {
			color: #39e994;
		}

		.hero p {
			position: relative;
			z-index: 1;

			max-width: 600px;

			color: #b8cdc2;

			font-size: 13px;

			line-height: 1.7;

			margin-bottom: 20px;
		}

		.hero-actions {
			position: relative;
			z-index: 2;

			display: flex;
			flex-wrap: wrap;

			gap: 8px;
		}

		.btn {
			border: 0;

			border-radius: 13px;

			padding: 13px 16px;

			display: inline-flex;
			align-items: center;
			justify-content: center;

			gap: 7px;

			font-size: 12px;
			font-weight: 850;

			transition: transform .18s ease;
		}

		.btn:active {
			transform: scale(.96);
		}

		.btn-primary {
			background: var(--primary);
			color: #03150c;
		}

		.btn-light {
			background: rgba(255,255,255,.09);
			color: white;

			border: 1px solid rgba(255,255,255,.14);
		}

		/* =========================================================
		   SEARCH
		========================================================= */

		.search-card {
			margin-top: -1px;

			padding: 16px;

			border-radius: 19px;

			background: var(--surface);

			border: 1px solid var(--border);

			box-shadow: var(--shadow);
		}

		.search-title {
			font-size: 14px;
			font-weight: 850;

			margin-bottom: 10px;
		}

		.search-row {
			display: flex;
			gap: 8px;
		}

		.search-input {
			flex: 1;
			min-width: 0;

			padding: 12px 13px;

			border-radius: 12px;

			border: 1px solid var(--border);

			background: var(--surface-2);

			color: var(--text);

			outline: none;
		}

		.search-input:focus {
			border-color: var(--primary);
		}

		.search-button {
			width: 47px;

			border: 0;

			border-radius: 12px;

			background: var(--primary);

			color: #03150c;

			font-size: 19px;
		}

		/* =========================================================
		   SECTIONS
		========================================================= */

		section {
			padding: 25px 0 4px;
		}

		.section-head {
			display: flex;
			align-items: end;
			justify-content: space-between;

			margin-bottom: 12px;
		}

		.section-head h2 {
			font-size: 19px;
			letter-spacing: -.5px;
		}

		.section-head p {
			color: var(--muted);
			font-size: 10px;
			margin-top: 4px;
		}

		.view-all {
			color: var(--primary-dark);

			font-size: 11px;
			font-weight: 850;
		}

		body.dark .view-all {
			color: #3de296;
		}

		/* =========================================================
		   SERVICES
		========================================================= */

		.services {
			display: grid;

			grid-template-columns:
				repeat(2, minmax(0, 1fr));

			gap: 9px;
		}

		.service {
			padding: 16px;

			border-radius: 18px;

			background: var(--surface);

			border: 1px solid var(--border);

			box-shadow:
				0 5px 20px rgba(0,0,0,.035);

			transition: transform .18s ease;
		}

		.service:active {
			transform: scale(.98);
		}

		.service-icon {
			width: 40px;
			height: 40px;

			display: grid;
			place-items: center;

			border-radius: 12px;

			background: rgba(8,185,104,.10);

			font-size: 19px;

			margin-bottom: 11px;
		}

		.service h3 {
			font-size: 13px;
			margin-bottom: 4px;
		}

		.service p {
			color: var(--muted);

			font-size: 10px;

			line-height: 1.5;
		}

		/* =========================================================
		   DESTINATIONS
		========================================================= */

		.destinations {
			display: grid;

			grid-template-columns:
				repeat(2, minmax(0, 1fr));

			gap: 9px;
		}

		.destination {
			position: relative;

			min-height: 142px;

			overflow: hidden;

			border-radius: 18px;

			padding: 15px;

			display: flex;
			align-items: flex-end;

			color: white;

			background:
				linear-gradient(
					135deg,
					#173b2a,
					#081710
				);

			box-shadow: var(--shadow);
		}

		.destination::before {
			content: "";

			position: absolute;
			inset: 0;

			background:
				radial-gradient(
					circle at 80% 20%,
					rgba(50,230,145,.28),
					transparent 35%
				);
		}

		.flag {
			position: absolute;

			right: 12px;
			top: 12px;

			font-size: 24px;
		}

		.destination-content {
			position: relative;
			z-index: 2;
		}

		.destination h3 {
			font-size: 16px;
			margin-bottom: 3px;
		}

		.destination p {
			color: #b9cec3;
			font-size: 9px;
		}

		/* =========================================================
		   FORM
		========================================================= */

		.form-card {
			padding: 17px;

			border-radius: 20px;

			background: var(--surface);

			border: 1px solid var(--border);

			box-shadow: var(--shadow);
		}

		.form-grid {
			display: grid;
			gap: 10px;
		}

		.field label {
			display: block;

			font-size: 10px;
			font-weight: 800;

			color: var(--muted);

			margin-bottom: 6px;
		}

		.field input,
		.field select {
			width: 100%;

			padding: 12px;

			border-radius: 11px;

			border: 1px solid var(--border);

			background: var(--surface-2);

			color: var(--text);

			outline: none;
		}

		.field input:focus,
		.field select:focus {
			border-color: var(--primary);
		}

		.form-submit {
			width: 100%;

			background: var(--primary);

			color: #03150c;
		}

		/* =========================================================
		   STATS
		========================================================= */

		.stats {
			display: grid;

			grid-template-columns:
				repeat(3, minmax(0, 1fr));

			gap: 8px;

			margin-top: 20px;
		}

		.stat {
			text-align: center;

			padding: 14px 5px;

			border-radius: 15px;

			background: var(--surface);

			border: 1px solid var(--border);
		}

		.stat strong {
			display: block;

			color: var(--primary);

			font-size: 18px;
		}

		.stat span {
			color: var(--muted);

			font-size: 8px;
		}

		/* =========================================================
		   FOOTER
		========================================================= */

		footer {
			margin-top: 32px;

			padding: 24px 0 16px;

			border-top: 1px solid var(--border);

			text-align: center;

			color: var(--muted);

			font-size: 10px;
		}

		/* =========================================================
		   PREMIUM FLOATING BOTTOM NAV
		========================================================= */

		.bottom-wrap {
			position: fixed;

			z-index: 2000;

			left: 0;
			right: 0;
			bottom: 0;

			padding:
				0 12px
				calc(10px + env(safe-area-inset-bottom));

			pointer-events: none;
		}

		.bottom-nav {
			width: min(100%, 520px);

			height: 66px;

			margin: auto;

			padding: 6px;

			display: grid;

			grid-template-columns:
				repeat(4, minmax(0, 1fr));

			gap: 4px;

			border-radius: 22px;

			background:
				color-mix(
					in srgb,
					var(--surface) 94%,
					transparent
				);

			border: 1px solid var(--border);

			box-shadow:
				0 15px 45px rgba(0,0,0,.15);

			backdrop-filter: blur(22px);
			-webkit-backdrop-filter: blur(22px);

			pointer-events: auto;
		}

		.bottom-item {
			position: relative;

			border: 0;

			background: transparent;

			border-radius: 17px;

			color: var(--muted);

			display: flex;

			flex-direction: column;

			align-items: center;

			justify-content: center;

			gap: 3px;

			font-size: 9px;

			font-weight: 800;

			transition:
				background .2s ease,
				color .2s ease,
				transform .18s ease;
		}

		.bottom-item:active {
			transform: scale(.92);
		}

		.bottom-icon {
			font-size: 19px;

			line-height: 1;
		}

		.bottom-item.active {
			color: var(--primary-dark);

			background:
				rgba(8,185,104,.10);
		}

		body.dark .bottom-item.active {
			color: #39e994;
			background: rgba(57,233,148,.09);
		}

		.bottom-item.active::after {
			content: "";

			position: absolute;

			bottom: 4px;

			width: 4px;
			height: 4px;

			border-radius: 50%;

			background: currentColor;
		}

		/* =========================================================
		   TOAST
		========================================================= */

		.toast {
			position: fixed;

			z-index: 5000;

			left: 50%;
			bottom: 91px;

			transform:
				translate(-50%, 15px);

			opacity: 0;

			pointer-events: none;

			padding: 11px 15px;

			border-radius: 12px;

			background: #102019;

			color: white;

			font-size: 11px;
			font-weight: 750;

			white-space: nowrap;

			box-shadow:
				0 10px 30px rgba(0,0,0,.25);

			transition: .25s ease;
		}

		.toast.show {
			opacity: 1;

			transform:
				translate(-50%, 0);
		}

		/* =========================================================
		   DESKTOP
		========================================================= */

		@media (min-width: 650px) {

			body {
				padding-bottom: 0;
			}

			.container {
				width: min(92%, 1120px);
			}

			.header-inner {
				height: 70px;
			}

			.hero {
				padding-top: 40px;
			}

			.hero-box {
				padding: 55px;
			}

			.services {
				grid-template-columns:
					repeat(4, 1fr);
			}

			.destinations {
				grid-template-columns:
					repeat(4, 1fr);
			}

			.form-grid {
				grid-template-columns:
					1fr 1fr 1fr auto;

				align-items: end;
			}

			.form-submit {
				width: auto;
			}

			.bottom-wrap {
				display: none;
			}

			footer {
				padding-bottom: 35px;
			}
		}
	</style>
</head>

<body>

	<!-- =========================================================
	     PREMIUM HEADER
	========================================================= -->

	<header class="top-header">

		<div class="container header-inner">

			<a href="#" class="brand">

				<div class="brand-logo">
					✈
				</div>

				<div class="brand-text">

					<div class="brand-name">
						FLYTRIPVISA
					</div>

					<div class="brand-subtitle">
						TRAVEL • VISA • FLIGHTS
					</div>

				</div>

			</a>

			<div class="header-actions">

				<button
					class="header-btn"
					id="themeBtn"
					aria-label="Change theme"
				>
					☾
				</button>

				<button
					class="header-btn header-profile"
					id="profileBtn"
					aria-label="Profile"
				>
					♙
				</button>

			</div>

		</div>

	</header>


	<main>

		<div class="container">

			<!-- HERO -->

			<section class="hero">

				<div class="hero-box">

					<div class="badge">
						<span class="badge-dot"></span>
						TRAVEL ASSISTANCE ONLINE
					</div>

					<h1>
						Your journey.<br>
						<span>Our expertise.</span>
					</h1>

					<p>
						Apply for visas, discover destinations,
						book flights and hotels — all from one
						simple travel portal.
					</p>

					<div class="hero-actions">

						<a
							href="#visa"
							class="btn btn-primary"
						>
							🚀 Apply for Visa
						</a>

						<a
							href="#services"
							class="btn btn-light"
						>
							Explore Services
						</a>

					</div>

				</div>

			</section>


			<!-- SEARCH -->

			<div class="search-card">

				<div class="search-title">
					🔎 What are you looking for?
				</div>

				<div class="search-row">

					<input
						id="searchInput"
						class="search-input"
						type="search"
						placeholder="Visa, country, flight, hotel..."
						autocomplete="off"
					>

					<button
						class="search-button"
						id="searchBtn"
					>
						⌕
					</button>

				</div>

			</div>


			<!-- SERVICES -->

			<section id="services">

				<div class="section-head">

					<div>
						<h2>Our Services</h2>

						<p>
							Everything you need for your journey
						</p>
					</div>

				</div>

				<div class="services">

					<a href="#visa" class="service">

						<div class="service-icon">
							🛂
						</div>

						<h3>Visa Services</h3>

						<p>
							Visa assistance for destinations worldwide.
						</p>

					</a>


					<a href="#flights" class="service">

						<div class="service-icon">
							✈️
						</div>

						<h3>Flight Booking</h3>

						<p>
							Find flights and plan your next journey.
						</p>

					</a>


					<a href="#hotels" class="service">

						<div class="service-icon">
							🏨
						</div>

						<h3>Hotels</h3>

						<p>
							Comfortable stays at your destination.
						</p>

					</a>


					<a href="#business" class="service">

						<div class="service-icon">
							💼
						</div>

						<h3>Business Setup</h3>

						<p>
							Business and company setup assistance.
						</p>

					</a>

				</div>

			</section>


			<!-- DESTINATIONS -->

			<section>

				<div class="section-head">

					<div>

						<h2>
							Popular Destinations
						</h2>

						<p>
							Start planning your next trip
						</p>

					</div>

					<a
						href="#visa"
						class="view-all"
					>
						View all →
					</a>

				</div>


				<div class="destinations">

					<a
						class="destination"
						href="#visa"
					>
						<span class="flag">🇨🇳</span>

						<div class="destination-content">

							<h3>China</h3>

							<p>
								Visa assistance
							</p>

						</div>
					</a>


					<a
						class="destination"
						href="#visa"
					>
						<span class="flag">🇯🇵</span>

						<div class="destination-content">

							<h3>Japan</h3>

							<p>
								Explore Japan
							</p>

						</div>
					</a>


					<a
						class="destination"
						href="#visa"
					>
						<span class="flag">🇦🇪</span>

						<div class="destination-content">

							<h3>UAE</h3>

							<p>
								Dubai & Abu Dhabi
							</p>

						</div>
					</a>


					<a
						class="destination"
						href="#visa"
					>
						<span class="flag">🇪🇺</span>

						<div class="destination-content">

							<h3>Europe</h3>

							<p>
								Schengen assistance
							</p>

						</div>
					</a>

				</div>

			</section>


			<!-- VISA -->

			<section id="visa">

				<div class="section-head">

					<div>

						<h2>
							Quick Visa Check
						</h2>

						<p>
							Tell us where you want to travel
						</p>

					</div>

				</div>


				<div class="form-card">

					<div class="form-grid">

						<div class="field">

							<label>
								Destination
							</label>

							<select id="destination">

								<option value="">
									Select country
								</option>

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

							<label>
								Passport Country
							</label>

							<input
								id="passport"
								type="text"
								placeholder="e.g. Bangladesh"
							>

						</div>


						<div class="field">

							<label>
								Travel Date
							</label>

							<input
								id="travelDate"
								type="date"
							>

						</div>


						<button
							class="btn form-submit"
							id="checkVisa"
						>
							Check Visa →
						</button>

					</div>

				</div>

			</section>


			<!-- FLIGHTS -->

			<section id="flights">

				<div class="section-head">

					<div>

						<h2>✈️ Flights</h2>

						<p>
							Plan your route with ease
						</p>

					</div>

				</div>


				<div class="form-card">

					<p
						style="
						font-size:13px;
						line-height:1.7;
						color:var(--muted);
						"
					>
						Search and arrange flight bookings
						through our travel assistance team.
					</p>

					<button
						class="btn btn-primary"
						style="
						margin-top:13px;
						width:100%;
						"
						onclick="showToast('Flight booking selected')"
					>
						Search Flights
					</button>

				</div>

			</section>


			<!-- HOTELS -->

			<section id="hotels">

				<div class="section-head">

					<div>

						<h2>🏨 Hotels</h2>

						<p>
							Find a comfortable place to stay
						</p>

					</div>

				</div>


				<div class="form-card">

					<p
						style="
						font-size:13px;
						line-height:1.7;
						color:var(--muted);
						"
					>
						Hotel reservation assistance
						for your international trip.
					</p>

					<button
						class="btn btn-primary"
						style="
						margin-top:13px;
						width:100%;
						"
						onclick="showToast('Hotel booking selected')"
					>
						Find Hotels
					</button>

				</div>

			</section>


			<!-- BUSINESS -->

			<section id="business">

				<div class="section-head">

					<div>

						<h2>💼 Business Setup</h2>

						<p>
							Build your international business
						</p>

					</div>

				</div>


				<div class="form-card">

					<p
						style="
						font-size:13px;
						line-height:1.7;
						color:var(--muted);
						"
					>
						Business setup and travel support
						for entrepreneurs and companies.
					</p>

					<button
						class="btn btn-primary"
						style="
						margin-top:13px;
						width:100%;
						"
						onclick="showToast('Business service selected')"
					>
						Get Assistance
					</button>

				</div>

			</section>


			<!-- STATS -->

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


	<!-- FOOTER -->

	<footer>

		<div class="container">

			<strong style="color:var(--text);">
				FLYTRIPVISA
			</strong>

			<br><br>

			© ${new Date().getFullYear()}
			FLYTRIPVISA. All rights reserved.

			<br>

			Visa • Flights • Hotels • Business

		</div>

	</footer>


	<!-- =========================================================
	     FLOATING BOTTOM APP NAVIGATION
	========================================================= -->

	<div class="bottom-wrap">

		<nav class="bottom-nav">

			<a
				href="#"
				class="bottom-item active"
				data-section="home"
			>
				<span class="bottom-icon">⌂</span>
				<span>Home</span>
			</a>


			<a
				href="#visa"
				class="bottom-item"
				data-section="visa"
			>
				<span class="bottom-icon">🛂</span>
				<span>Visa</span>
			</a>


			<a
				href="#flights"
				class="bottom-item"
				data-section="flights"
			>
				<span class="bottom-icon">✈️</span>
				<span>Flights</span>
			</a>


			<a
				href="#hotels"
				class="bottom-item"
				data-section="hotels"
			>
				<span class="bottom-icon">🏨</span>
				<span>Hotels</span>
			</a>

		</nav>

	</div>


	<!-- TOAST -->

	<div
		class="toast"
		id="toast"
	></div>


	<script>

		/* =========================================================
		   THEME
		========================================================= */

		const themeBtn =
			document.getElementById("themeBtn");

		const savedTheme =
			localStorage.getItem(
				"flytripvisa-theme"
			);

		if (savedTheme === "dark") {

			document.body.classList.add("dark");

			themeBtn.textContent = "☀";

		}

		themeBtn.addEventListener("click", () => {

			document.body.classList.toggle("dark");

			const dark =
				document.body.classList.contains("dark");

			localStorage.setItem(
				"flytripvisa-theme",
				dark ? "dark" : "light"
			);

			themeBtn.textContent =
				dark ? "☀" : "☾";

		});


		/* =========================================================
		   TOAST
		========================================================= */

		function showToast(message) {

			const toast =
				document.getElementById("toast");

			toast.textContent = message;

			toast.classList.add("show");

			setTimeout(() => {

				toast.classList.remove("show");

			}, 2200);

		}


		/* =========================================================
		   PROFILE
		========================================================= */

		document
			.getElementById("profileBtn")
			.addEventListener("click", () => {

				showToast(
					"Login & profile coming soon"
				);

			});


		/* =========================================================
		   SEARCH
		========================================================= */

		const searchInput =
			document.getElementById(
				"searchInput"
			);

		document
			.getElementById("searchBtn")
			.addEventListener("click", () => {

				const value =
					searchInput.value.trim();

				if (!value) {

					showToast(
						"Enter a destination or service"
					);

					searchInput.focus();

					return;
				}

				showToast(
					"Searching: " + value
				);

			});


		searchInput.addEventListener(
			"keydown",
			event => {

				if (event.key === "Enter") {

					document
						.getElementById("searchBtn")
						.click();

				}

			}
		);


		/* =========================================================
		   VISA CHECK
		========================================================= */

		document
			.getElementById("checkVisa")
			.addEventListener("click", () => {

				const destination =
					document.getElementById(
						"destination"
					).value;

				const passport =
					document.getElementById(
						"passport"
					).value.trim();

				if (!destination) {

					showToast(
						"Select your destination"
					);

					return;
				}

				if (!passport) {

					showToast(
						"Enter your passport country"
					);

					return;
				}

				showToast(
					"Checking " +
					destination +
					" visa for " +
					passport
				);

			});


		/* =========================================================
		   BOTTOM NAV ACTIVE STATE
		========================================================= */

		const navItems =
			document.querySelectorAll(
				".bottom-item"
			);

		navItems.forEach(item => {

			item.addEventListener(
				"click",
				() => {

					navItems.forEach(
						nav =>
							nav.classList.remove(
								"active"
							)
					);

					item.classList.add("active");

				}
			);

		});


		/* =========================================================
		   SCROLL BASED NAVIGATION
		========================================================= */

		const sections = [
			{
				id: "visa",
				nav: "visa"
			},
			{
				id: "flights",
				nav: "flights"
			},
			{
				id: "hotels",
				nav: "hotels"
			}
		];

		window.addEventListener(
			"scroll",
			() => {

				let current = "home";

				const position =
					window.scrollY + 180;

				for (const section of sections) {

					const element =
						document.getElementById(
							section.id
						);

					if (
						element &&
						position >= element.offsetTop
					) {
						current = section.nav;
					}

				}

				navItems.forEach(item => {

					item.classList.toggle(
						"active",
						item.dataset.section === current
					);

				});

			},
			{ passive: true }
		);


		/* =========================================================
		   HOME LINK
		========================================================= */

		document
			.querySelector(
				'.bottom-item[data-section="home"]'
			)
			.addEventListener("click", event => {

				event.preventDefault();

				window.scrollTo({
					top: 0,
					behavior: "smooth"
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