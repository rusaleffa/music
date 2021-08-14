import React from 'react';
import Document, {Head, Html, Main, NextScript,DocumentContext } from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(ctx:DocumentContext ) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>my app</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    </body>
            </Html>
        );
    }
}

export default AppDocument;