import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //s
import 'tailwindcss/tailwind.css';

// --- Configs ---
import SEO from '@root/next-seo.config';
import { useEffect, useState } from 'react';
import { AppLayout } from '../components/layout';
import { sleepFn } from '../utils/async';

export default function _app({ Component, pageProps, router }: AppProps) {
	const [loading, setLoading] = useState(true);
	//Binding events.
	router.events?.on('routeChangeStart', () => NProgress.start());
	router.events?.on('routeChangeComplete', () => NProgress.done());
	router.events?.on('routeChangeError', () => NProgress.done());

	// after ssr finish fetching data will show loading
	useEffect(() => {
		if (router?.isReady) {
			//delay for smooth loading
			sleepFn(500).then(() => {
				setLoading(false);
			});
		} else {
			setLoading(false);
		}
	}, [router?.isReady]);

	return (
		<div className="relative">
			{/* --------- AppLayout will be apply all related with layout and logic or init for entire app */}
			<AppLayout ssrLoading={loading}>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} key={router?.route} />
			</AppLayout>
		</div>
	);
}
