package cn.js.servlet;

import java.io.IOException;
import java.net.URLDecoder;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BridgeTestServlet extends AbstractJsTestServlet implements JsonResultProcess{

	@Override
	protected void handerProcess(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		Map<String,String[]> reqMaps =req.getParameterMap();
		
		for(Iterator<Map.Entry<String, String[]>> it = reqMaps.entrySet().iterator();it.hasNext();){
			Map.Entry<String, String[]> en = it.next();
			System.out.println(en.getKey()+"=======");
			for(String s : en.getValue()){
				System.out.println(URLDecoder.decode(s));
			}
			System.out.println("\n--------");
		}
		resp.getOutputStream().write("你好啊".getBytes());
	}

	@Override
	public String respJsonstring() {
		return null;
	}

}
