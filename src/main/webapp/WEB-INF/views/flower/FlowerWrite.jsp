<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <div class="container" style="margin-top:50px;">
    	
    	<h4>상품 등록</h4>
   		<hr/>
   		<div class="row">
   		  <form class="form-horizontal">
   		  
		    <div class="form-group">
		    	<div class="col-sm-offset-2 col-sm-8">
			    	<select class="form-control" id="categorySelect">
			    		<option>선택</option>
			    		<option>장미</option>
			    		<option>안개</option>
			    		<option>혼합</option>
			    	</select>
		    	</div>
		    </div>
		    
		    <div class="form-group">
		      <label class="control-label col-sm-2" for="title">제목</label>
		      <div class="col-sm-8">
		        <input type="text" class="form-control" id="title" placeholder="제목을 입력하세요">
		      </div>
		    </div>
		    
		    <div class="form-group">
		      <label class="control-label col-sm-2" for="price">가격</label>
		      <div class="col-sm-8">
		        <input type="text" class="form-control" id="price" placeholder="가격을 입력하세요">
		      </div>
		    </div>
		    <div class="form-group">
		      <label class="control-label col-sm-2" for="file">사진</label>
		      <div class="col-sm-8">          
		        <input type="file" class="form-control" id="file">
		      </div>
		    </div>
		    <div class="form-group">
		      <label class="control-label col-sm-2" for="content">상품 설명</label>
		      <div class="col-sm-8">          
		        <textarea rows="10" cols="" class="form-control" id="content"></textarea>
		      </div>
		    </div>
		    <div class="form-group">        
		      <div class="col-sm-offset-2 col-sm-8">
		        <button type="submit" class="btn btn-primary">상품 등록</button>
		        <button type="reset" class="btn btn-danger">취소</button>
		      </div>
		    </div>
		  </form>
		</div>
    </div>