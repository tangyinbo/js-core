package cn.t;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;

public class TT {
	public static void main(String[] args) throws UnsupportedEncodingException {
		String s = "%E6%88%91%E6%98%AF";
		Charset cs = Charset.forName("iso8859-1");
		//s = new String(s.getBytes("iso8859-1"),"utf-8");
		System.out.println(new String(s.getBytes("iso8859-1"),"gbk"));
	}
}
