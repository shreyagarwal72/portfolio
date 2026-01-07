import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookPortfolio.css';
import profilePhoto from '@/assets/vanshu-profile-new.jpg';
import previewOrbital from '@/assets/preview-orbital-world.png';

const BookPortfolio = () => {
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const coverRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Vanshu Agarwal - Interactive Portfolio Book';

    // Opening animation
    const timer1 = setTimeout(() => {
      if (coverRightRef.current) {
        coverRightRef.current.classList.add('turn');
      }
    }, 2100);

    const timer2 = setTimeout(() => {
      if (coverRightRef.current) {
        coverRightRef.current.style.zIndex = '-1';
      }
    }, 2800);

    let pageNumber = pagesRef.current.length - 1;
    const pageTimers: NodeJS.Timeout[] = [];
    
    pagesRef.current.forEach((_, index) => {
      const timer = setTimeout(() => {
        if (pagesRef.current[pageNumber]) {
          pagesRef.current[pageNumber]!.classList.remove('turn');
          const currentPage = pageNumber;
          setTimeout(() => {
            if (pagesRef.current[currentPage]) {
              pagesRef.current[currentPage]!.style.zIndex = String(10 + index);
            }
          }, 500);
        }
        pageNumber--;
      }, (index + 1) * 200 + 2100);
      pageTimers.push(timer);
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      pageTimers.forEach(t => clearTimeout(t));
    };
  }, []);

  const handlePageTurn = (pageIndex: number) => {
    const page = pagesRef.current[pageIndex];
    if (!page) return;
    if (page.classList.contains('turn')) {
      page.classList.remove('turn');
      setTimeout(() => { page.style.zIndex = String(2 - pageIndex); }, 500);
    } else {
      page.classList.add('turn');
      setTimeout(() => { page.style.zIndex = String(2 + pageIndex); }, 500);
    }
  };

  const handleContactMe = () => {
    pagesRef.current.forEach((page, index) => {
      setTimeout(() => {
        if (page) {
          page.classList.add('turn');
          setTimeout(() => { page.style.zIndex = String(20 + index); }, 500);
        }
      }, (index + 1) * 200 + 100);
    });
  };

  const handleBackProfile = () => {
    let pageNumber = pagesRef.current.length - 1;
    pagesRef.current.forEach((_, index) => {
      setTimeout(() => {
        if (pagesRef.current[pageNumber]) {
          pagesRef.current[pageNumber]!.classList.remove('turn');
          const currentPage = pageNumber;
          setTimeout(() => {
            if (pagesRef.current[currentPage]) {
              pagesRef.current[currentPage]!.style.zIndex = String(10 + index);
            }
          }, 500);
        }
        pageNumber--;
      }, (index + 1) * 200 + 100);
    });
  };

  return (
    <div className="book-portfolio-page">
      <div className="wrapper">
        <div className="cover cover-left"></div>
        <div className="cover cover-right" ref={coverRightRef}></div>

        <div className="book">
          <div className="book-page page-left">
            <div className="profile-page">
              <img src={profilePhoto} alt="Vanshu Agarwal" />
              <h1>Vanshu Agarwal</h1>
              <h3>Video Editor & Creative Mind</h3>
              <div className="social-media">
                <a href="https://github.com/shreyagarwal72" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                <a href="https://instagram.com/vanshu_ag_72" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                <a href="https://youtube.com/@nextupstudioyt" target="_blank" rel="noopener noreferrer"><i className="bx bxl-youtube"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin-square"></i></a>
              </div>
              <p>Hi, I'm a passionate video editor and content creator from India specializing in gaming content, music production, and digital storytelling.</p>
              <div className="btn-box">
                <a href="/cv" className="btn">Download CV</a>
                <button className="btn contact-me" onClick={handleContactMe}>Contact Me!</button>
              </div>
            </div>
          </div>

          <div className="book-page page-right turn" ref={el => pagesRef.current[0] = el}>
            <div className="page-front">
              <h1 className="title">Work Experience</h1>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year"><i className="bx bxs-calendar"></i>2022 - Present</span>
                  <h3>Video Editor - NextUp Studio</h3>
                  <p>Creating engaging gaming content, music videos, and promotional materials.</p>
                </div>
                <div className="workeduc-content">
                  <span className="year"><i className="bx bxs-calendar"></i>2021 - 2022</span>
                  <h3>Content Creator - Freelance</h3>
                  <p>Produced original music tracks, gaming videos, and tutorials.</p>
                </div>
              </div>
              <span className="number-page">1</span>
              <span className="nextprev-btn" onClick={() => handlePageTurn(0)}><i className="bx bx-chevron-right"></i></span>
            </div>
            <div className="page-back">
              <h1 className="title">Education</h1>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year"><i className="bx bxs-calendar"></i>2020 - Present</span>
                  <h3>High School</h3>
                  <p>Currently pursuing high school education while developing creative skills.</p>
                </div>
                <div className="workeduc-content">
                  <span className="year"><i className="bx bxs-calendar"></i>Ongoing</span>
                  <h3>Certifications</h3>
                  <p>Earned recognition from Amar Ujala and Green Hat for excellence in digital content creation.</p>
                </div>
              </div>
              <span className="number-page">2</span>
              <span className="nextprev-btn back" onClick={() => handlePageTurn(0)}><i className="bx bx-chevron-left"></i></span>
            </div>
          </div>

          <div className="book-page page-right turn" ref={el => pagesRef.current[1] = el}>
            <div className="page-front">
              <h1 className="title">My Services</h1>
              <div className="services-box">
                <div className="services-content"><i className="bx bx-video"></i><h3>Video Editing</h3><p>Professional editing for YouTube and social media.</p></div>
                <div className="services-content"><i className="bx bx-music"></i><h3>Music Production</h3><p>Original tracks and audio design.</p></div>
                <div className="services-content"><i className="bx bx-game"></i><h3>Gaming Content</h3><p>Minecraft builds and gameplay videos.</p></div>
                <div className="services-content"><i className="bx bx-palette"></i><h3>Graphic Design</h3><p>Thumbnails, banners, and logos.</p></div>
              </div>
              <span className="number-page">3</span>
              <span className="nextprev-btn" onClick={() => handlePageTurn(1)}><i className="bx bx-chevron-right"></i></span>
            </div>
            <div className="page-back">
              <h1 className="title">My Skills</h1>
              <div className="skills-box">
                <div className="skills-content"><h3>Video Editing</h3><div className="content"><span><i className="bx bxl-adobe"></i>Premiere</span><span><i className="bx bx-film"></i>DaVinci</span></div></div>
                <div className="skills-content"><h3>Web Development</h3><div className="content"><span><i className="bx bxl-html5"></i>HTML</span><span><i className="bx bxl-css3"></i>CSS</span><span><i className="bx bxl-react"></i>React</span></div></div>
              </div>
              <span className="number-page">4</span>
              <span className="nextprev-btn back" onClick={() => handlePageTurn(1)}><i className="bx bx-chevron-left"></i></span>
            </div>
          </div>

          <div className="book-page page-right turn" ref={el => pagesRef.current[2] = el}>
            <div className="page-front">
              <h1 className="title">Latest Project</h1>
              <div className="portfolio-box">
                <div className="img-box"><img src={previewOrbital} alt="Orbital World" /></div>
                <div className="info-box">
                  <div className="info-title"><h3>Orbital World</h3><a href="https://orbital-world.vercel.app" target="_blank" rel="noopener noreferrer">Live Preview <i className="bx bx-link-external"></i></a></div>
                  <p>Tech Used: React, Three.js, Tailwind CSS</p>
                </div>
                <div className="btn-box"><Link to="/portfolio" className="btn">More Projects</Link></div>
              </div>
              <span className="number-page">5</span>
              <span className="nextprev-btn" onClick={() => handlePageTurn(2)}><i className="bx bx-chevron-right"></i></span>
            </div>
            <div className="page-back">
              <h1 className="title">Contact Me!</h1>
              <div className="contact-box">
                <form><input type="text" className="field" placeholder="Full Name" /><input type="email" className="field" placeholder="Email" /><textarea className="field" placeholder="Your Message" rows={5}></textarea><input type="submit" value="Send Message" className="btn" /></form>
              </div>
              <span className="number-page">6</span>
              <span className="nextprev-btn back" onClick={() => handlePageTurn(2)}><i className="bx bx-chevron-left"></i></span>
              <button className="back-profile" onClick={handleBackProfile}><p>Profile</p><i className="bx bxs-user"></i></button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="home-link"><i className="bx bx-home"></i> Back to Home</Link>
    </div>
  );
};

export default BookPortfolio;
