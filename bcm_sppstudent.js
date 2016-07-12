/*    */
jQuery(document).ready(function($) {
	var $loginBlockContent = $("#block-menu-menu-login-menu .content nav");
	var ssolink = $("#block-menu-menu-login-menu .content nav li a").attr("href");
	var spphtml = '<h3 class="login" role="button" tabindex="0" aria-controls="login-options">Login</h3><nav id="login-options" class="login" style="opacity: 0;"><a href="'+ssolink+'" class="login" title="">Campus students, faculty, staff, and alumni<span class="description"></span></a><a href="/user" class="login" title="">Summer Program Student<span class="description"></span></a></nav>';
	$loginBlockContent.replaceWith(spphtml);
	
  var loginLogout = $('#block-menu-menu-login-menu');
  var loginNav = $('nav', loginLogout);
  var firstLoginLink = $('a:first-child', loginNav);
  var fadeTimeout = false;
  var isOpen = false;
  var isHardOpened = false;
  function showLogin() {
    isOpen = true;
    loginNav.addClass('active');
    setTimeout(function() {
      loginNav.addClass('visible')
    }, 300);
    loginNav.css('opacity', '1');
    clearTimeout(fadeTimeout)
  }
  function hideLogin() {
    isHardOpened = false;
    isOpen = false;
    loginNav.css('opacity', '0');
    fadeTimeout = setTimeout(function() {
      loginNav.removeClass('visible');
      loginNav.removeClass('active')
    }, 300)
  }
  loginButton = $('h3', loginLogout);
  loginButton.attr('role', 'button').attr('tabindex', 0).attr('aria-controls', 'login-options');
  loginButton.hover(function() {
    firstLoginLink.addClass('highlight')
  }, function() {
    firstLoginLink.removeClass('highlight')
  });
  loginButton.click(function(e) {
    firstLoginLink[0].click()
  });
  loginButton.keydown(function(e) {
    if (e.keyCode === 13) {
      if (!isHardOpened) {
        isHardOpened = true;
        showLogin();
        $('#login-options a:first-child').focus()
      } else {
        hideLogin()
      }
    }
    if (e.keyCode === 27) {
      hideLogin()
    }
  });
  $('a', loginNav).each(function() {
    var description = $(this).attr('title');
    descriptionSpan = $('<span />').addClass('description').text(description);
    descriptionSpan.appendTo($(this))
  });
  loginLogout.mouseover(function() {
    if (isHardOpened) {
      return
    }
    if (!isOpen) {
      showLogin()
    }
  });
  loginLogout.mouseout(function() {
    if (isHardOpened) {
      return
    }
    if (isOpen) {
      hideLogin()
    }
  });
	
	if(Drupal.settings.bcm_sppstudent.login == 1){
		$('body').prepend('<div id="bcm-sppstudent-login-block"><div id="login-box"><div class="logo-area"><img alt="0c805db401739637f6b994b6757b5a91cb13dacc" id="logo" src="https://cdn.onelogin.com/images/brands/logos/login/0c805db401739637f6b994b6757b5a91cb13dacc.png?1435008338"></div><div class="bcm-spp-buttons"><ul><li><a class="button" href="'+ssolink+'" class="login" title="">Campus students, faculty, staff, and alumni<span class="description"></span></a></li><li><a class="button" href="/user?destination='+Drupal.settings.bcm_sppstudent.dest+'" class="login" title="">Summer Program Student<span class="description"></span></a></li></ul></div></div></div>');
	// for LC logo version
	/* 		$('body').prepend('<div id="bcm-sppstudent-login-block"><div id="login-box"><div class="logo-area"><img alt="0c805db401739637f6b994b6757b5a91cb13dacc" id="logo" src="/sites/all/themes/jjamerson/logo-lc-mobile.svg"></div><div class="bcm-spp-buttons"><ul><li><a class="button" href="'+ssolink+'" class="login" title="">Campus students, faculty, staff, and alumni<span class="description"></span></a></li><li><a class="button" href="/user'+Drupal.settings.bcm_sppstudent.dest+'" class="login" title="">Summer Program Student<span class="description"></span></a></li></ul></div></div></div>'); */
	}
});
jQuery(window).load(function(e){
	if(jQuery(e.target).width() < 768){
		
		console.log(jQuery('.mobileMenu .block-menu:eq(0) .menu li:eq(2) a'));
		
		jQuery('.mobileMenu .block-menu:eq(0) .menu li:eq(2) a').text('LOGIN (Campus students, faculty, staff, and alumni)');
		jQuery('.mobileMenu .block-menu:eq(0) .menu').append('<li><a href="/user">LOGIN (Summer Program Student)</a></li>');
	}

	//if(jQuery(e.target).width() < 768) jQuery('.mobileMenu .block-menu:eq(0) .menu .menu li:eq(2) a').attr('href', '/user/logout');
});
