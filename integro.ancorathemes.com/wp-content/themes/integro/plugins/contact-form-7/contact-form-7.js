(function() {
    "use strict";
    jQuery(document).on('action.ready_integro', function() {
        jQuery(".wpcf7-form").each(function() {
            var $form = jQuery(this);
            $form.find('.wpcf7-checkbox > .wpcf7-list-item > .wpcf7-list-item-label,.wpcf7-radio > .wpcf7-list-item > .wpcf7-list-item-label').each(function() {
                var $label = jQuery(this);
                if ($label.next('input[type="checkbox"],input[type="radio"]').length > 0) {
                    $label.addClass('wpcf7-list-item-right');
                }
            });
            $form.find('.wpcf7-checkbox > .wpcf7-list-item > .wpcf7-list-item-label,.wpcf7-radio > .wpcf7-list-item > .wpcf7-list-item-label,.wpcf7-wpgdprc > .wpcf7-list-item > .wpcf7-list-item-label').on('click', function() {
                var $chk = jQuery(this).siblings('input[type="checkbox"],input[type="radio"]');
                if ($chk.length > 0) {
                    if ($chk.attr('type') == 'radio') {
                        jQuery(this).parents('.wpcf7-radio').find('.wpcf7-list-item-label').removeClass('wpcf7-list-item-checked').find('input[type="radio"]').each(function() {
                            this.checked = false;
                        });
                    }
                    $chk.get(0).checked = $chk.get(0).checked ? false : true;
                    jQuery(this).toggleClass('wpcf7-list-item-checked', $chk.get(0).checked);
                    $chk.trigger('change');
                }
            });
            var $submit = $form.find('input:submit');
            if ($submit.length > 0) {
                var submit_reset_timeout = 0;
                $submit.prop('disabled', false);
                $form.on('change', 'input,select,textarea', function() {
                    setTimeout(function() {
                        $submit.prop('disabled', false).removeAttr('disabled');
                    }, submit_reset_timeout);
                });
                $form.get(0).addEventListener('wpcf7reset', function() {
                    setTimeout(function() {
                        $submit.prop('disabled', false).removeAttr('disabled');
                    }, submit_reset_timeout);
                });
                if (false) {
                    jQuery(document).on('ajaxComplete', function(e) {
                        setTimeout(function() {
                            $submit.prop('disabled', false).removeAttr('disabled');
                        }, submit_reset_timeout);
                    });
                }
            }
        });
    });
})();