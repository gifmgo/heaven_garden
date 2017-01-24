<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">하늘정원</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
     <ul class="nav navbar-nav navbar-right">  
      <li><a href="#" id="addMember">회원가입</a></li>
      <li><a href="#">로그인</a></li>
    </ul>
  </div>
</nav>    
<div class="container-fluid">
	<div class="row">
		<div class="col-sm-12" style="background-color: #2F4F4F">
			<div class="row">
				<div class="col-sm-offset-2 col-sm-4">
					<ul class="nav navbar-nav">
	 						<li class="active"><a href="#flowerDiv">꽃</a></li>
	 						<li class="active"><a href="#treeDiv">수목</a></li>
	 						<li class="active"><a href="#">조경</a></li>
	 						<li class="active"><a href="#">화원</a></li>
	 						<li class="active"><a href="#">꽃다발</a></li>
	 						<li class="active"><a href="#">기타</a></li>
	 					</ul>	
				 </div>
				  <div class="input-group input-group-sm col-sm-2" style="margin-top:10px;">
	   	  				<input type="text" class="form-control" placeholder="검색!!">
	  			     <div class="input-group-btn">
			   		    <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
	     			</div>
			    </div>
			</div>		    
		</div>
		<div class="col-sm-12">
			<img src="images/Test.jpg" class="img-rounded" alt="Cinque Terre" width="100%" height="500">
		</div>
	</div>
</div>


 <div class="modal fade" id="myModal" role="dialog">
     <form action="" class="form-horizontal" method="post">
     
    <div class="modal-dialog modal-mg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" style="text-align: center">회원가입</h4>
        </div>
        <div class="modal-body">
         <div class="form-group">
            <label class="col-sm-offset-1 col-sm-2 control-label">아이디 </label>
            <div class=" input-group col-sm-7">
              <input type="text" id="id" name="id" class="form-control">
              <div class="input-group-btn">
                <input type="button" id="checkIdBtn" value="중복확인" class="btn btn-default">
              </div>
          </div> 
         </div>
         <div class="form-group">
            <label class="col-sm-offset-1 col-sm-2 control-label">비밀번호  </label>
            <div class="input-group col-sm-7">
              <input type="password" id="pwd" name="pwd" class="form-control">
            </div>
          </div>
          
         <div class="form-group">
            <label class="col-sm-offset-1 col-sm-2 control-label">이름  </label>
            <div class="input-group col-sm-7">
              <input type="text" id="name" name="name" class="form-control">
            </div>
         </div>
         
          <div class="form-group">
            <label class="col-sm-offset-1 col-sm-2 control-label">연락처  </label>
            <div class="input-group col-sm-7">
              <input type="text" id="phone" name="phone" class="form-control">
            </div>
         </div>
         <br/>     
        </div>
        <div class="modal-footer">
          <input type="submit" id="addMemberBtn" value="회원가입" class="col-sm-offset-5 btn btn-default">  
          <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
        </div>
      </div>
    </div>
    </form>
  </div>
