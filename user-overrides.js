user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("geo.provider.network.url", "");
user_pref("javascript.use_us_english_locale", true);

//Disable Google Safe Browsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.allowOverride", false);

//Disable form autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

//Passwords
user_pref("signon.rememberSignons", false);

//Headers / Referers
user_pref("network.http.referer.XOriginPolicy", 2);

//Audio/Video: WebRTC, WebGL, DRM
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("webgl.disabled", true);

//UI Features
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("extensions.pocket.enabled", false);
user_pref("browser.translations.automaticallyPopup", false);

//Fingerprinting (RFP)
//user_pref("privacy.resistFingerprinting", true);

//Disable PermissionManager write to disk
user_pref("permissions.memory_only", true);
