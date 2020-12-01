import '../styles/globals.css';
import Head from 'next/head';
import * as React from 'react';
import { AuthProvider } from '../auth';
import { FacebookProvider } from 'react-facebook';
import { APP_ID } from '../facebookConfig';

function MyApp({ Component, pageProps }) {
  return(
      <AuthProvider>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
          <meta name="keywords" content="mblog, bird348, khomsan, stou, มหาวิทยาลัยสุโขทัยธรรมาธิราช, สรุปชุดวิชา, เกษตร, อาหารและเครื่องดื่ม" />
          <meta name="description" content="mblog" />
          <meta name="author" content="Khomsan, คมสันต์" />
          <meta http-equiv="refresh" content="600" />
          <link rel="icon" type="image/png" sizes="32x32" href="/mBlog.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
        </Head>
        <FacebookProvider appId={APP_ID}>
             <Component {...pageProps} />
        </FacebookProvider>
      </AuthProvider>
  ) 
}

export default MyApp;