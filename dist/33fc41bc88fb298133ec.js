function get_template_Standard_str(t){var i="",a=$("#new_mail option:selected").val();if(i+="<table style='color: black; font-family: Arial, sans-serif; font-size: 8pt;'>",i+="<tr>",i+="<td style='padding-left: 5px;'>",i+="<span style='color: rgb(0, 160, 210); font-family: Arial, sans-serif;font-size: 10pt;font-weight: bold;'>"+t.name+"</span>",i+="<br/>",is_valid_data(t.job)&&(i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt;'>"+t.job+"</div>"),i+="<br/>",is_valid_data(t.phone)&&(i+="<div>Mobil: "+t.phone+"</div>"),t.fixflag&&is_valid_data(t.fix)&&(i+="<div>Fix: "+t.fix+"</div>"),t.faxflag&&is_valid_data(t.fax)&&(i+="<div>Fax: "+t.fax+"</div>"),i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt;' ><a href=mailto:"+t.email+">"+t.email+"</a></div>",i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt;' ><a href='https://www.drei.at'>www.drei.at</a></div>",i+="</td>",i+="</tr>",i+="<td style='padding-left: 5px;'>",i+="<br/>",i+="<img src='https://h3aoutlooksignature-test.azurewebsites.net/assets/DreiLogo-64.png' alt='Logo' />",i+="<br/>",i+="<br/>",i+="</td>",i+="</tr>",i+="<tr>",i+="<td style='padding-left: 5px;'>","templateS"===a&&(i+="<span style='color: black; font-family: Arial, sans-serif; font-size: 10pt; font-weight: bold;'>Drei.</span>",i+="<span>Macht's einfach.</span>"),"templateB"===a&&(i+="<span style='color: black; font-family: Arial, sans-serif; font-size: 10pt; font-weight: bold;'>Drei</span>",i+="<span style='color: rgb(0, 160, 210); font-family: Arial, sans-serif; font-size: 10pt;'>Business.</span>",i+="<div><span>Macht's einfach.</span></div>"),"templateW"===a&&(i+="<span style='color: black; font-family: Arial, sans-serif; font-size: 10pt; font-weight: bold;'>Drei</span>",i+="<span style='color: rgb(0, 160, 210); font-family: Arial, sans-serif; font-size: 10pt;'>Wholesale.</span>",i+="<div><span>Macht's einfach.</span></div>"),i+="</td>",i+="</tr>",i+="<tr>",i+="<td style='padding-left: 5px;'>",i+="<br/>",i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt; font-weight: bold;'>Hutchison Drei Austria GmbH</div>",t.location.toLowerCase().startsWith("drei shop")&&(i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt; font-weight: bold;'>"+t.location+"</div>"),i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt;'>"+t.address+"</div>",i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt;'>FN 140132b, Handelsgericht Wien</div>",i+="</td>",i+="</tr>",t.officetimeflag&&is_valid_data(t.officetime)){var s=t.officetime.replaceAll("Uhr","Uhr <br />");console.log(s),i+="<tr>",i+="<td style='padding-left: 5px;'>",i+="<br/>",i+="<div style='color: black; font-family: Arial, sans-serif; font-size: 8pt;'>"+s+"</div>",i+="</td>",i+="</tr>"}return i+"</table>"}