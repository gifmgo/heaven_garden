/**
 * 
 */

//상품 더보기
function product(obj){
	var btn = $(obj);
	var value = btn.attr("value"); 
	alert("벨류 : "+value);
	switch (value) {
	case 'flower':
		location.href="flower.do";
		break;

	default:
		break;
	}
	
} 
