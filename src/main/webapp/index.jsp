<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/ajaxutil/ajaxutil.js"></script>
</head>
<body>
    <button value="a" onclick="ajaxUtil.req('POST','http://localhost:18081/js-core/jsserv?name=唐音波&age=2',{name:1,age:2})">button</button>
	this is the test page of index
</body>
</html>