package com.example.demo.common;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletResponse;

public class FileDownload {
	
	
	
    @SuppressWarnings("resource")
	public static void download(String fileUploadPath,   String targetFilename, HttpServletResponse response) {
    	
    	 
        FileOutputStream fos = null;
        InputStream is = null;
        try 
        {
           
            String path=fileUploadPath+ "/" + targetFilename;
            File file = new File(path);
        	response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(file.getName(), "UTF-8")); // 다운로드 되거나 로컬에 저장되는 용도로 쓰이는지를 알려주는 헤더
        	
        	FileInputStream fileInputStream = new FileInputStream(path); // 파일 읽어오기 
        	OutputStream out = response.getOutputStream();
        	
        	int read = 0;
            byte[] buffer = new byte[1024];
            read = fileInputStream.read(buffer);
            System.out.println(read);
            while (read!=-1) { // 1024바이트씩 계속 읽으면서 outputStream에 저장, -1이 나오면 더이상 읽을 파일이 없음
            	
                out.write(buffer, 0, read);
                read = fileInputStream.read(buffer);
            }
                
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (fos != null) {
                    fos.close();
                }
                if (is != null) {
                    is.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}