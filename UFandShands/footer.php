<?php $sidebarContent = ufandshands_sidebar_detector('site_footer',false); ?>
<footer role="contentinfo">
    <?php if($sidebarContent) : ?>
        <div class="container append-bottom">

            <div id="footer_top" class="footer_count_<?php ufandshands_sidebar_detector('site_footer',false,true) ?>">

                <?php echo $sidebarContent; ?>
        <div class="clear"></div>
            </div>
        </div>
    <?php endif ?>

    <?php if (!$disabled_global_elements) : ?>

    <div id="institutional-footer">
        <div class="container"><!-- <span class="badge"></span> -->
            <div>
                <div id="branding" class="span-16">
                    <div>
                        <a href="http://ufhealth.org" rel="nofollow" target="_blank"><img src="<?php bloginfo('template_url'); ?>/images/footer-ufhealth-logo.jpg" alt="UF Health - University of Florida Health" /></a>
                        <p class="ufhealth-branding-text hide-for-small"><strong>Together</strong> we discover. <strong>Together</strong> we teach.<br />
                            <strong>Together</strong> we care for our patients and our communities.<br />
                            <strong>Together</strong> we create unstoppable momentum.</p>
                    </div>
                    <div>
                        <a href="http://www.ufl.edu" rel="nofollow" target="_blank"><img src="<?php bloginfo('template_url'); ?>/images/footer-uf-logo.jpg" class="clear" alt="The University of Florida" /></a>
                        <p class="hide-for-small"><br />The Foundation for The Gator Nation</p>
                    </div>
                </div><!-- end #branding -->
                 <div class="span-8" id="gift-wrap"> <?php apollo_makeagift_link(); ?></div>
                <div id="footer-links" class="span-24 black-25">

                    <ul>
                        <li><?php $u_time = get_the_time('U'); $u_modified_time = get_the_modified_time('U'); if ($u_modified_time >= $u_time + 86400) { echo "Updated "; the_modified_time('F j, Y');} ?></li>
                        <li><a id="contact-webmaster" href="<?php ufandshands_contact_webmaster_link() ?>" rel="nofollow" target="_blank">Contact Webmaster</a></li>
                        <li class="last"><a href="/sitemap/">Sitemap</a></li>

                    </ul>
                    <ul>
                        <li>This page uses <a href="http://www.google.com/analytics" rel="nofollow" target="_blank">Google Analytics</a> (<a href="http://www.google.com/intl/en_ALL/privacypolicy.html" rel="nofollow" target="_blank">Google Privacy Policy</a>)</li>
                        <li><a href="https://ufhealth.org/disclaimer-and-permitted-use" rel="nofollow" target="_blank">Disclaimer &amp; Permitted Use</a></li>
                        <li><a href="http://www.ufl.edu/disability/" rel="nofollow" target="_blank">Disability Services</a></li>
                        <li><a href="http://security.health.ufl.edu/" rel="nofollow" target="_blank">Security Policies</a></li>
                        <li><a href="http://privacy.ufl.edu/privacystatement.html" rel="nofollow" target="_blank">UF Privacy Policy</a></li>
                        <li><a href="https://ufhealth.org/shands-privacy-policy" rel="nofollow" target="_blank">Shands Privacy Policy</a></li>
                        <li class="last">&copy; <?php echo date(Y); ?> <a href="http://www.ufl.edu" rel="nofollow" target="_blank">University of Florida</a></li>
                    </ul>
                    <ul>
                        <li>UF Health is a collaboration of the University of Florida Health Science Center, Shands hospitals and other health care entities. </li>
                        <li class="last"><a href="https://ufhealth.org/copyright-and-disclaimer" rel="nofollow" target="_blank">&copy; <?php echo date('Y'); ?></a> <a href="https://ufhealth.org" rel="nofollow" target="_blank">University of Florida Health</a></li>
                    </ul>
                    <?php $opt_contact_info = of_get_option('opt_contact_info'); ?>
                    <?php if (!empty($opt_contact_info)) : ?>
                    <ul>
                      <li class="last"><?php echo $opt_contact_info; ?></li>
                    </ul>
                    <?php endif; ?>

                </div><!-- end #footer-links -->
            </div>
        </div><!-- end footer container -->
    </div><!-- end institutional footer container -->
    <?php endif ?>
<?php do_action('ufandshands_footer_markup'); ?>
</footer>

<?php wp_footer(); ?>
<!-- <?php echo get_num_queries(); ?> queries. <?php timer_stop(1); ?> seconds. -->
</div><!--end role=main> -->

<!--  Quantcast Tag -->
<script>
  qcdata = {} || qcdata;
       (function(){
       var elem = document.createElement('script');
       elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://pixel") + ".quantserve.com/aquant.js?a=p-qcDRQxhuPfFyc";
       elem.async = true;
       elem.type = "text/javascript";
       var scpt = document.getElementsByTagName('script')[0];
       scpt.parentNode.insertBefore(elem,scpt);
     }());


   var qcdata = {qacct: 'p-qcDRQxhuPfFyc',
                        orderid: '',
                        revenue: ''
                        };
</script>
  <noscript>
    <img src="//pixel.quantserve.com/pixel/p-qcDRQxhuPfFyc\.gif?labels=_fp.event.Default;" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/>
  </noscript>
<!-- End Quantcast Tag -->


<!--START Google Remarketing-->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1070936547;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1070936547/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
 <!--END Google Remarketing-->

<?php if(is_page('request-thank-you')) { ?>
<!-- Google Code for RMI Form Submission Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1070936547;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "qQUrCP2PlAMQ4-PU_gM";
var google_conversion_value = 1.00;
var google_conversion_currency = "USD";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1070936547/?value=1.00&amp;currency_code=USD&amp;label=qQUrCP2PlAMQ4-PU_gM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
<?php } ?>

</body>
</html>
