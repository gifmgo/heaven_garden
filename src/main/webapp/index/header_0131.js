/**
 * 
 */

    var checkId=0;

    $(function(){
		
    	//로그인 버튼 클릭시
    	$('#login').click(function(){
    		$('#loginModal').modal();
    	});
    	
    	$('#loginForm').submit(function(){
    		
    		alert("로그인 버튼 클릭");
    		if($('#loginId').val() == ''){
    			alert("아이디를 입력해주세요 !");
    			$('#loginId').focus();
    			return false;
    		}
    		
    		if($('#loginPw').val() == ''){
    			alert("비밀번호를 입력해주세요 !");
    			$('#loginPw').focus();
    			return false;
    		}
    		alert("입력한 아이디  : "+$('#loginId').val()+ " // 비번 : "+$('#loginPw').val());
    	});
    	
    	
    	//회원가입 버튼 클릭시     	
		$('#addMember').click(function(){
			$('#myModal').modal();
		});
		
		//아이디 중복검사버튼
		$('#checkIdBtn').click(function(){
			
			var id=$('#id').val();
			$.ajax({
				url:"checkId.do",
				data:{
					id:id
				},
				success:function(data){
					if(data.msg=='사용할 수 있는 아이디입니다'){
						checkId=1;
						console.log("success : "+checkId);
						
					}else{
						checkId=0;
						console.log("false : "+checkId);
						
					}
				 alert(data.msg);
				 
				}
			});
		});
		
		//회원가입 버튼 클릭시
		$('#memberSubmit').submit(function(){
			console.log("submit : "+checkId);
			if(checkId==0){
				alert('아이디 중복검사를 해주세요');
				return false;	
			}else{
			   if($('#id').val()==""){
					alert('아이디를 입력하세요');
					$('#id').focus();
					return false;
				}else if($('#pwd').val()==''){
					alert('비밀번호를 입력하세요');
					$('#pwd').focus();
					return false;
				}else if($('#name').val()==''){
					alert('이름를 입력하세요');
					$('#name').focus();
					return false;
				}else if($('#phone').val()==''){
					alert('연락처를 입력하세요');
					$('#phone').focus();
					return false;
				}else{
					
					$.ajax({
						url:"addMember.do",
						data:{
							id:$('#id').val(),
					        pwd:$('#pwd').val(),
					        name:$('#name').val(),
					        phone:$('#phone').val()
						},
						success:function(data){
							console.log(data.result);
							if(data.result==0){
								alert('회원가입에 실패했습니다');
								return false;
							}else{
								alert('회원가입 성공');
							}
						}
					});
					
				}
			}
		});
	});
