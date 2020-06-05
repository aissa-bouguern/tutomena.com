import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
/* import GitHubButton from 'react-github-btn'; */
import Layout from '../layout';
import PostListing from '../components/PostListing';
/* import ProjectListing from '../components/ProjectListing'; */
/* import SimpleListing from '../components/SimpleListing'; */
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import roov from '../../content/thumbnails/roov.png';
import twitterIcon from '../../content/thumbnails/twitter-32.png';
import facebookIcon from '../../content/thumbnails/facebook-32.png';
/* import youtubeIcon from '../../content/thumbnails/youtube-32.png'; */

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – تقنيات البرمجة وتطوير الويب`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>مجتمع روف</h1>
              <p>
                إثراء المحتوى العربي بالمعلومات التقنية هو هدف مجتمعنا لنبني مجتمع متساعد يحقق نجاح ومصدر لكل شخص أنطلق في عالم التقنية لنصبح شركاء له في النجاح
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    href="https://www.twitter.com/roov_sa"
                    title="حساب روف على تويتر"
                    target="_blank"
                  >
                    <img src={twitterIcon} alt="حساب توتومينا على تويتر" />
                  </a>
                </div>
                {/* <div>
                  <a
                    href="https://www.youtube.com/channel/UCN_OqOSbjFFH3Tkr8FbquTA"
                    title="قناة توتومينا على يوتيوب"
                    target="_blank"
                  >
                    <img src={youtubeIcon} alt="قناة توتومينا على يوتيوب" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="newsletter-section">
              <img
                src={roov}
                className="newsletter-avatar"
                alt="عبدالرحمن خالد"
              />
              <div>
                <h3>توصل بالجديد دائما</h3>
                <p>
                  اشترك في قائمة روف البريدية للتوصل بآخر الدروس والمقالات
                  الحصرية.
                </p>
                <a className="button" href="/newsletter">
                  أريد الإشتراك
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              آخر التدوينات
              <Link to="/blog" className="view-all">
                شاهد الكل
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              الأكثر شعبية
              <Link to="/categories/popular" className="view-all">
                شاهد الكل
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMdx(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMdx(
      limit: 10
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
