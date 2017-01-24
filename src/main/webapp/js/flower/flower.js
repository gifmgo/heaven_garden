/**
 * 
 */

function detailImg(obj){
	
	var img = $(obj);
	var imgId = img.attr("id");
	location.href="flowerDetail.do?seq="+imgId;
}