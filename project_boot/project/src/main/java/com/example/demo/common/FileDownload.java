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
        	response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(file.getName(), "UTF-8")); // �ٿ�ε� �ǰų� ���ÿ� ����Ǵ� �뵵�� ���̴����� �˷��ִ� ���
        	
        	FileInputStream fileInputStream = new FileInputStream(path); // ���� �о���� 
        	OutputStream out = response.getOutputStream();
        	
        	int read = 0;
            byte[] buffer = new byte[1024];
            read = fileInputStream.read(buffer);
            System.out.println(read);
            while (read!=-1) { // 1024����Ʈ�� ��� �����鼭 outputStream�� ����, -1�� ������ ���̻� ���� ������ ����
            	
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