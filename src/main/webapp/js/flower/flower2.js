/**
 * 
 */

function detailImg(obj){
	
	var img = $(obj);
	var imgId = img.attr("id");
	location.href="flowerDetail.do?seq="+imgId;
}
//뒤로가기 버튼 클릭시
function backFunc(){
	history.go(-1)();	
}

//상품 글쓰기
function writeProduct(obj){
	
	var product = $(obj);
	var productName = product.attr("id");
	location.href="productWrite.do?name="+productName;
	
}


