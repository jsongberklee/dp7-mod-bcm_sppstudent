/*    */
jQuery(document).ready(function($) {
	var $loginBlockContent = $("#block-menu-menu-login-menu .content nav");
	var ssolink = $("#block-menu-menu-login-menu .content nav li a").attr("href");
	var spphtml = '<h3 class="login" role="button" tabindex="0" aria-controls="login-options">Login</h3><nav id="login-options" class="login" style="opacity: 0;"><a href="'+ssolink+'" class="login" title="">Campus students, faculty, staff, and alumni<span class="description"></span></a><a href="/spp/account" class="login" title="">First time login for 5 week student<span class="description"></span></a><a href="/user" class="login" title="">5 week student<span class="description"></span></a></nav>';
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
  })
});
