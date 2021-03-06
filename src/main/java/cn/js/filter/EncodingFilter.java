package cn.js.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class EncodingFilter implements Filter{

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		System.out.println(req.getRequestURL());
		HttpServletResponse resp = (HttpServletResponse) response;
		String method = req.getMethod();
		if("post".equalsIgnoreCase(method)){
			req.setCharacterEncoding("utf-8");
		}else if("get".equalsIgnoreCase(method)){
			req.setCharacterEncoding("utf-8");
		}
		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		chain.doFilter(req, resp);
	}

	@Override
	public void destroy() {
		
	}

}
