var _display_name,_job_title,_email_id,_phone_number,_office_location,_office_address,_office_times,_fax,_fix_line,_message,fixchecked=!1,faxchecked=!1,officetimechecked=!1,ssoAuthHelper=require("../../helpers/ssoauthhelper");function on_initialization_complete(){$(document).ready((function(){_output=$("textarea#output"),_display_name=$("input#PlaceHolderMain_txtName"),_email_id=$("input#PlaceHolderMain_txtEmail"),_job_title=$("input#PlaceHolderMain_txtJobtitle"),_phone_number=$("input#PlaceHolderMain_txtMobile"),_office_location=$("input#PlaceHolderMain_txtLocation"),_office_address=$("input#PlaceHolderMain_txtAddress"),_fax=$("input#PlaceHolderMain_txtFax"),_fix_line=$("input#PlaceHolderMain_txtPhone"),_office_times=$("input#PlaceHolderMain_tbOpeningHours"),_message=$("p#message"),prepopulate_from_userprofile(),load_saved_user_info(),ssoAuthHelper.getGraphData()}))}function prepopulate_from_userprofile(){_display_name.val($("input#PlaceHolderMain_txtName")),_email_id.val(Office.context.mailbox.userProfile.emailAddress)}function load_saved_user_info(){var e=localStorage.getItem("user_info");if(e||(e=Office.context.roamingSettings.get("user_info")),e){var a=JSON.parse(e);$("input#PlaceHolderMain_txtName").val(a.name),$("input#PlaceHolderMain_txtEmail").val(a.email),$("input#PlaceHolderMain_txtJobtitle").val(a.job),$("input#PlaceHolderMain_txtMobile").val(a.phone),$("input#PlaceHolderMain_txtLocation").val(a.location),$("input#PlaceHolderMain_txtAddress").val(a.address),a.fixflag&&$("td input#PlaceHolderMain_chkPhone").prop("checked",!0),$("input#PlaceHolderMain_txtPhone").val(a.fix),a.faxflag&&$("td input#PlaceHolderMain_chkFax").prop("checked",!0),a.officetimeflag&&$("td input#PlaceHolderMain_chkOpeningHours").prop("checked",!0),$("input#PlaceHolderMain_txtFax").val(a.fax),$("textarea#PlaceHolderMain_tbOpeningHours").val(a.officetime)}}function display_message(e){$("p#message").text(e)}function clear_message(){$("p#message").text("")}function is_not_valid_text(e){return e.length<=0}function is_not_valid_email_address(e){return is_not_valid_text(e)||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function form_has_valid_data(e,a){return is_not_valid_text(a)?(display_message("Please enter a valid name."),!1):!is_not_valid_email_address(e)||(display_message("Please enter a valid email address."),!1)}function updateFixfieldFlag(){fixchecked=$("td input#PlaceHolderMain_chkPhone").prop("checked")}function updateFaxfieldFlag(){faxchecked=$("td input#PlaceHolderMain_chkFax").prop("checked")}function updateOfficeTimefieldFlag(){officetimechecked=$("td input#PlaceHolderMain_chkOpeningHours").prop("checked")}function navigate_to_taskpane_assignsignature(){window.location.href="/assignsignature.html"}function create_user_info(){var e=$("input#PlaceHolderMain_txtEmail").val().trim(),a=$("input#PlaceHolderMain_txtName").val().trim();if(clear_message(),form_has_valid_data(e,a)){clear_message();var t={};t.name=a,t.email=e,t.job=$("input#PlaceHolderMain_txtJobtitle").val().trim(),t.phone=$("input#PlaceHolderMain_txtMobile").val().trim(),t.location=$("input#PlaceHolderMain_txtLocation").val().trim(),t.address=$("input#PlaceHolderMain_txtAddress").val().trim(),t.fixflag=$("td input#PlaceHolderMain_chkPhone").prop("checked"),console.log("fixflag "+t.fixflag),t.fix=$("input#PlaceHolderMain_txtPhone").val().trim(),t.faxflag=$("td input#PlaceHolderMain_chkFax").prop("checked"),console.log("faxfalg "+t.faxflag),t.fax=$("input#PlaceHolderMain_txtFax").val().trim(),t.officetimeflag=$("td input#PlaceHolderMain_chkOpeningHours").prop("checked"),console.log("officetimeflag "+t.officetimeflag),t.officetime=$("textarea#PlaceHolderMain_tbOpeningHours").val().trim(),console.log(t),localStorage.setItem("user_info",JSON.stringify(t)),navigate_to_taskpane_assignsignature()}}function clear_all_fields(){$("input#PlaceHolderMain_txtName").val(""),$("input#PlaceHolderMain_txtEmail").val(""),$("input#PlaceHolderMain_txtJobtitle").val(""),$("input#PlaceHolderMain_txtMobile").val(""),$("input#PlaceHolderMain_txtFax").val(""),$("input#PlaceHolderMain_txtPhone").val(""),$("input#PlaceHolderMain_txtLocation").val(""),$("input#PlaceHolderMain_txtAddress").val(""),$("textarea#PlaceHolderMain_tbOpeningHours").val(""),$("select#PlaceHolderMain_ddlRegion").prop("selectedIndex",0),$("td input#PlaceHolderMain_chkPhone").prop("checked",!1),$("td input#PlaceHolderMain_chkFax").prop("checked",!1),$("td input#PlaceHolderMain_chkOpeningHours").prop("checked",!1)}function clear_all_localstorage_data(){localStorage.removeItem("user_info"),localStorage.removeItem("newMail"),localStorage.removeItem("reply"),localStorage.removeItem("forward"),localStorage.removeItem("override_olk_signature")}function clear_roaming_settings(){Office.context.roamingSettings.remove("user_info"),Office.context.roamingSettings.remove("newMail"),Office.context.roamingSettings.remove("reply"),Office.context.roamingSettings.remove("forward"),Office.context.roamingSettings.remove("override_olk_signature"),Office.context.roamingSettings.saveAsync((function(e){console.log("clear_roaming_settings - "+JSON.stringify(e));var a="All settings reset successfully! This add-in won't insert any signatures. You can close this pane now.";e.status===Office.AsyncResultStatus.Failed&&(a="Failed to reset. Please try again."),display_message(a)}))}function clear_signature_in_body(){Office.context.mailbox.item.body.setSignatureAsync("",{coercionType:Office.CoercionType.Html},(function(e){console.log("clear_signature - "+JSON.stringify(e))}))}function save_select_template(){create_user_info()}function reset_all_configuration(){clear_all_fields(),clear_all_localstorage_data(),clear_roaming_settings(),clear_signature_in_body()}Office.onReady((function(){on_initialization_complete()}));