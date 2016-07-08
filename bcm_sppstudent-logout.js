/*    */
jQuery(document).ready(function($) {
	var $loginBlockContent = $("#block-menu-menu-login-menu .content nav");
	var spphtml = '<h3 class="login" role="button" tabindex="0" aria-controls="login-options"><a href="/user/logout" class="login" title="" style="margin-right:0">Logout</a></h3>';
	$loginBlockContent.replaceWith(spphtml);
});
