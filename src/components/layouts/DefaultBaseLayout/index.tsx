import * as React from 'react';
import classNames from 'classnames';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import Head from 'next/head';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};

    return (
        <>
            <Head>
                <link rel="icon" href="/images/logo_favicon.png" />
            </Head>
            <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
                <div className="sb-base sb-default-base-layout">
                    {site.header && <Header {...site.header} enableAnnotations={enableAnnotations} />}
                    {props.children}
                    {site.footer && <Footer {...site.footer} enableAnnotations={enableAnnotations} />}
                </div>
            </div>
        </>
    );
}
