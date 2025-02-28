import {Fragment} from "react";
import Link from "next/link";
import {Row, Col} from "react-bootstrap";
import {
  FaRegComments,
  FaCalendarAlt,
  FaQuoteRight,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaTh,
  FaArrowLeft,
  FaArrowRight,
  FaReplyAll
} from "react-icons/fa";
import Image from "next/image";

const BlogSinglePostAudio = () => {
  return (
    <Fragment>
      <div className="single-post">
        <h2 className="blog-title">
          But I must explain to you how all this mistaken idea
        </h2>
        <ul className="blog-meta">
          <li>
            <Link href="/blog/grid-left-sidebar">

              <FaCalendarAlt/>April 14, 2021
            </Link>
          </li>
          <li>
            <a href="#">
              <FaRegComments/> 2 Comments
            </a>
          </li>
        </ul>
        <div className="blog-img">
          <div className="ratio ratio-16x9">
            <iframe
              width="540"
              height="360"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/118951274&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada malesuada metus ut placerat. Cras a porttitor quam, eget
              ornare sapien. In sit amet vulputate metus. Nullam eget rutrum
              nisl. Sed tincidunt lorem sed maximus interdum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aenean
              scelerisque efficitur mauris nec tincidunt. Ut cursus leo mi, eu
              ultricies magna faucibus id.
            </p>
            <blockquote className="blockquote">
              <FaQuoteRight/>
              <p>
                Integer is metus site turpis facilisis customers. elementum an
                mauris in venenatis consectetur east. Praesent condimentum
                bibendum Morbi sit amet commodo pellentesque at fringilla
                tincidunt risus.
              </p>
            </blockquote>
            <Row>
              <Col sm={6}>
                <div className="single-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    className="w-100 mb-4"
                    src="/assets/images/blog/blog_single_img1.jpg"
                    alt="blog_single_img1"
                    width={100}
                    height={100}
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="single-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    className="w-100 mb-4"
                    src="/assets/images/blog/blog_single_img2.jpg"
                    alt="blog_single_img2"
                    width={100}
                    height={100}
                  />
                </div>
              </Col>
            </Row>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id dolor dui, dapibus gravida elit. Donec consequat laoreet
              sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus
              laoreet tincidunt. Mauris interdum convallis metus. Suspendisse
              vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod
              eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus
              vel scelerisque id, iaculis eu nibh.
            </p>
            <p>
              Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus.
              Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum
              pretium blandit tellus, sodales volutpat sapien varius vel.
              Phasellus tristique cursus erat, a placerat tellus laoreet eget.
              Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet
              lectus venenatis est rhoncus interdum a vitae velit.
            </p>
            <div className="blog-post-footer">
              <Row className="justify-content-between align-items-center">
                <Col md={8} className="mb-3 mb-md-0">
                  <div className="tags">
                    <Link href="/blog/grid-left-sidebar">
                      General
                    </Link>
                    <Link href="/blog/grid-left-sidebar">
                      Design
                    </Link>
                    <Link href="/blog/grid-left-sidebar">
                      Branding
                    </Link>
                    <Link href="/blog/grid-left-sidebar">
                      Modern
                    </Link>
                  </div>
                </Col>
                <Col md={4}>
                  <ul className="social-icons text-md-end">
                    <li>
                      <a href="#" className="sc_facebook">
                        <FaFacebookF/>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_twitter">
                        <FaTwitter/>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_google">
                        <FaGooglePlusG/>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_youtube">
                        <FaYoutube/>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_instagram">
                        <FaInstagram/>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="post-navigation bg--grey">
        <Row className="align-items-center justify-content-between p-4">
          <Col xs={5}>
            <div className="post-nav post-nav--prev">
              <Link href="/blog/post-left-sidebar">

                <FaArrowLeft/>
                <span className="title">blanditiis praesentium</span>

              </Link>
            </div>
          </Col>
          <Col xs={2}>
            <Link href="/blog/grid-left-sidebar" className="post-nav--home">

              <FaTh/>

            </Link>
          </Col>
          <Col xs={5} className="text-end">
            <div className="post-nav post-nav--next">
              <Link href="/blog/post-left-sidebar">

                <FaArrowRight/>
                <span className="title">voluptatum deleniti</span>

              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="card post-author space-mt--40 space-mb--40">
        <div className="card-body">
          <div className="post-author__img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="/assets/images/users/user1.jpg" alt="user1" width={100} height={100}/>
          </div>
          <div className="post-author__info">
            <h6 className="author-name">
              <Link href="/blog/grid-left-sidebar" className="mb-1 d-inline-block">
                Maria Redwood
              </Link>
            </h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="related-post">
        <div className="content-title">
          <h5>Related posts</h5>
        </div>
        <Row>
          <Col md={6}>
            <div className="blog-post">
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src="/assets/images/blog/blog_small_img2.jpg"
                    alt="blog_small_img1"
                    width={100}
                    height={100}
                  />

                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      But I must explain to you how all this mistaken
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog/post-left-sidebar">

                        <FaCalendarAlt/>April 14, 2021
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/post-left-sidebar">

                        <FaRegComments/>10
                      </Link>
                    </li>
                  </ul>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="blog-post">
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src="/assets/images/blog/blog_small_img3.jpg"
                    alt="blog_small_img1"
                    width={100}
                    height={100}
                  />

                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      Why is a ticket to Lagos so expensive?
                    </Link>
                  </h6>
                  <ul className="blog-meta">
                    <li>
                      <Link href="/blog/post-left-sidebar">

                        <FaCalendarAlt/>April 14, 2021
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/post-left-sidebar">

                        <FaRegComments/>10
                      </Link>
                    </li>
                  </ul>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="comment-area">
        <div className="content-title">
          <h5>(03) Comments</h5>
        </div>
        <ul className="comment-list space-mb--40">
          <li className="comment-info">
            <div className="d-flex">
              <div className="comment-info__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="/assets/images/users/user2.jpg" alt="user2" width={100} height={100}/>
              </div>
              <div className="comment-info__content">
                <div className="d-flex">
                  <div className="meta-data">
                    <h6>
                      <a href="#">Alden Smith</a>
                    </h6>
                    <div className="comment-time">MARCH 5, 2020, 6:05 PM</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="comment-reply">
                      <FaReplyAll/>
                      Reply
                    </a>
                  </div>
                </div>
                <p>
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire that the cannot foresee the pain
                  and trouble that.
                </p>
              </div>
            </div>
            <ul className="children">
              <li className="comment-info">
                <div className="d-flex">
                  <div className="comment-info__image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="/assets/images/users/user3.jpg" alt="user3" width={100} height={100}/>
                  </div>
                  <div className="comment-info__content">
                    <div className="d-flex align-items-md-center">
                      <div className="meta-data">
                        <h6>
                          <a href="#">Daisy Lana</a>
                        </h6>
                        <div className="comment-time">
                          april 8, 2020, 5:15 PM
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a href="#" className="comment-reply">
                          <FaReplyAll/>
                          Reply
                        </a>
                      </div>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire that the cannot
                      foresee the pain and trouble that.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="comment-info">
            <div className="d-flex">
              <div className="comment-info__image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="/assets/images/users/user4.jpg" alt="user4" width={100} height={100}/>
              </div>
              <div className="comment-info__content">
                <div className="d-flex">
                  <div className="meta-data">
                    <h6>
                      <a href="#">John Becker</a>
                    </h6>
                    <div className="comment-time">april 15, 2020, 10:30 PM</div>
                  </div>
                  <div className="ms-auto">
                    <a href="#" className="comment-reply">
                      <FaReplyAll/>
                      Reply
                    </a>
                  </div>
                </div>
                <p>
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire that the cannot foresee the pain
                  and trouble that.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="content-title">
          <h5>Write a comment</h5>
        </div>
        <form className="field-form" name="enq" method="post">
          <div className="row">
            <div className="mb-3 col-md-4">
              <input
                name="name"
                className="form-control"
                placeholder="Your Name"
                required="required"
                type="text"
              />
            </div>
            <div className="mb-3 col-md-4">
              <input
                name="email"
                className="form-control"
                placeholder="Your Email"
                required="required"
                type="email"
              />
            </div>
            <div className="mb-3 col-md-4">
              <input
                name="website"
                className="form-control"
                placeholder="Your Website"
                required="required"
                type="text"
              />
            </div>
            <div className="mb-3 col-md-12">
              <textarea
                rows={3}
                name="message"
                className="form-control"
                placeholder="Your Comment"
                required="required"
                defaultValue={""}
              />
            </div>
            <div className="mb-3 col-md-12">
              <button
                value="Submit"
                name="submit"
                className="btn btn-fill-out"
                title="Submit Your Message!"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default BlogSinglePostAudio;
