import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import * as faIcons from 'react-icons/fa';

const ContactForm = () => {
  const [text, setText] = useState(
    <form class='contact-form' onSubmit={sendEmail}>
      <h3 class='contact-form-title'>Get in touch</h3>

      <div class='input-wrapper'>
        <input
          class='form-input'
          type='text'
          name='name'
          placeholder='Name'
          required
        />

        <span class='focus-form-input'></span>
        <span class='symbol-form-input'>
          <faIcons.FaUser aria-hidden='true' />
        </span>
      </div>

      <div class='input-wrapper'>
        <input
          class='form-input'
          type='text'
          name='email'
          placeholder='Email'
          required
        />
        <span class='focus-form-input'></span>
        <span class='symbol-form-input'>
          <faIcons.FaEnvelope aria-hidden='true' />
        </span>
      </div>

      <div class='input-wrapper'>
        <textarea
          class='form-input'
          name='message'
          placeholder='Message'
          required
        />
        <span class='focus-form-input'></span>
      </div>

      <div class='form-btn-container'>
        <button class='form-btn'>Send</button>
      </div>
    </form>
  );

  const handleClick = () => {
    setText(
      <div>
        <h1 className='contact-form-title'>Thank you for your message!</h1>
        <p className='email-confirmation-text'>
          I will contact you as soon as posible
        </p>
      </div>
    );
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m2w8xot',
        'template_c996ynt',
        e.target,
        'user_AqqQ5LTNPx3tGeNSTeHj7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleClick();
  }
  return (
    <div className='contact-form-container' id='contact'>
      <div className='contact-form-wrapper'>
        <div className='form-anim'>
          <svg
            width='201'
            height='580'
            viewBox='0 0 201 580'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            id='tipito'
          >
            <g>
              <path
                id='Vector'
                d='M130.496 561.802L147.125 561.8L155.035 497.734L130.493 497.735L130.496 561.802Z'
                fill='#FFB7B7'
              />
              <path
                id='Vector_2'
                d='M126.254 556.379L159.003 556.377H159.004C164.539 556.377 169.847 558.574 173.761 562.483C177.675 566.392 179.874 571.694 179.874 577.223V577.9L126.255 577.902L126.254 556.379Z'
                fill='#2F2E41'
              />
              <path
                id='Vector_3'
                d='M64.0329 563.157L80.6621 563.155L88.5726 499.089L64.0302 499.09L64.0329 563.157Z'
                fill='#FFB7B7'
              />
              <path
                id='Vector_4'
                d='M59.7913 557.733L92.5398 557.732H92.5412C98.0761 557.732 103.384 559.929 107.298 563.838C111.212 567.747 113.411 573.049 113.411 578.578V579.255L59.7923 579.257L59.7913 557.733Z'
                fill='#2F2E41'
              />
              <path
                id='Vector_5'
                d='M165.396 292.447L156.941 539.301H129.813L104.103 318.087L93.1909 542.011H59.2813L49.9124 276.779L154.015 275.354L165.396 292.447Z'
                fill='#2F2E41'
              />
              <path
                id='Vector_6'
                d='M81.9982 92.3701L129.813 90.8582L140.468 287.462L64.886 285.95L81.9982 92.3701Z'
                fill='#CBCBCB'
              />
              <path
                id='Vector_7'
                d='M119.79 298.145L169.702 296.721L155.441 225.5L156.867 184.192L168.276 117.245L136.902 98.7272L129.772 90.1807C129.772 90.1807 118.363 101.576 118.363 154.279C118.363 206.983 119.79 298.145 119.79 298.145Z'
                fill='#2F2E41'
              />
              <path
                id='Vector_8'
                d='M77.0076 296.721C77.0076 296.721 119.79 193.826 101.251 147.701C101.251 147.701 94.9401 97.3028 84.5478 90.1807L68.4512 97.3028L34.2256 114.396L47.0602 150.006L42.782 179.919L39.9299 283.901L77.0076 296.721Z'
                fill='#2F2E41'
              />
              <path
                id='Vector_9'
                d='M47.5179 298.843C45.7484 298.013 44.1828 296.806 42.9311 295.306C41.6794 293.806 40.7722 292.05 40.2735 290.162C39.7747 288.274 39.6964 286.299 40.0441 284.378C40.3919 282.456 41.1572 280.634 42.2862 279.04L26.0057 253.211L39.3075 239.5L61.7858 276.299C64.3411 278.371 66.0468 281.307 66.5796 284.551C67.1124 287.796 66.4353 291.122 64.6766 293.901C62.9179 296.68 60.1998 298.718 57.0374 299.629C53.8749 300.54 50.4879 300.26 47.5179 298.843V298.843Z'
                fill='#FFB7B7'
              />
              <path
                id='Vector_10'
                d='M49.9124 111.547L34.2256 114.396L0 197.012L31.3735 278.203L52.7645 258.262L32.7995 209.832C32.7995 209.832 34.2256 204.134 32.7995 203.422C31.3735 202.709 34.8949 198.124 34.2256 197.769C32.7995 197.012 37.0777 189.89 37.0777 189.89L54.1905 154.279L49.9124 111.547Z'
                fill='#2F2E41'
              />
              <g id='brazo-izq'>
                <path
                  id='Vector_11'
                  d='M177.545 323.519C176.088 322.218 174.934 320.613 174.164 318.818C173.395 317.023 173.029 315.081 173.092 313.13C173.155 311.178 173.646 309.264 174.529 307.522C175.413 305.78 176.669 304.253 178.207 303.049L170.01 273.645L186.684 264.311L197.677 305.997C199.531 308.713 200.324 312.014 199.905 315.275C199.486 318.536 197.884 321.53 195.403 323.689C192.921 325.849 189.733 327.025 186.442 326.993C183.15 326.962 179.985 325.726 177.545 323.519H177.545Z'
                  fill='#FFB7B7'
                />
                <path
                  id='Vector_12'
                  d='M152.588 117.245H168.276L185.389 205.558L183.963 219.802L189.667 255.412L197.511 291.735L172.554 292.448L159.719 225.499L148.31 179.919L152.588 117.245Z'
                  fill='#2F2E41'
                />
              </g>
              <g id='cabeza'>
                <path
                  id='Vector_13'
                  d='M106.707 79.2271C125.106 79.2271 140.022 64.3291 140.022 45.9515C140.022 27.5739 125.106 12.6759 106.707 12.6759C88.3085 12.6759 73.3932 27.5739 73.3932 45.9515C73.3932 64.3291 88.3085 79.2271 106.707 79.2271Z'
                  fill='#FFB7B7'
                />
                <path
                  id='Vector_14'
                  d='M133.169 19.0658L139.084 16.9173C139.084 16.9173 126.716 4.5634 109.508 5.63769L114.348 0.803516C114.348 0.803516 102.517 -3.49346 91.7625 7.78621C86.1088 13.7157 79.5674 20.6854 75.4895 28.5368H69.1547L71.7986 33.8185L62.5449 39.1002L72.043 38.1515C71.1432 42.7115 71.4529 47.4272 72.9413 51.8306L75.0923 57.739C75.0923 57.739 83.6963 40.5509 83.6963 38.4024V43.7737C83.6963 43.7737 89.6116 38.9396 89.6116 35.7169L92.8381 39.4766L94.4514 33.5682L114.348 39.4766L111.122 34.6425L123.49 36.2539L118.65 30.3455C118.65 30.3455 132.632 37.3281 133.169 43.2365C133.707 49.1449 140.698 56.6647 140.698 56.6647L143.924 51.2934C143.924 51.2934 148.764 27.1227 133.169 19.0658Z'
                  fill='#2F2E41'
                />
              </g>
            </g>
          </svg>

          <svg
            width='778'
            height='625'
            viewBox='0 0 778 625'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            id='sobre-mensaje'
          >
            <g>
              <g id='sobre'>
                <path
                  id='Vector'
                  d='M627.817 254.402H627.647L530.68 295.76L398.007 352.346C397.489 352.564 396.933 352.677 396.37 352.68C395.808 352.683 395.25 352.575 394.73 352.363L257.851 295.641L158.501 254.469L158.349 254.402H158.18C156.612 254.404 155.109 255.026 154.001 256.134C152.892 257.241 152.269 258.742 152.267 260.308V516.79C152.269 518.356 152.892 519.857 154.001 520.964C155.109 522.071 156.612 522.694 158.18 522.696H627.817C629.384 522.694 630.887 522.071 631.996 520.964C633.104 519.857 633.728 518.356 633.729 516.79V260.308C633.728 258.742 633.104 257.241 631.996 256.134C630.887 255.026 629.384 254.404 627.817 254.402V254.402Z'
                  fill='white'
                />
                <path
                  id='Vector_2'
                  d='M628.238 256.089C628.066 256.089 627.897 256.037 627.756 255.938L394.155 93.44C393.444 92.9478 392.599 92.6847 391.734 92.6862C390.869 92.6877 390.025 92.9536 389.316 93.4482L157.398 255.936C157.214 256.064 156.988 256.114 156.768 256.075C156.547 256.036 156.352 255.911 156.223 255.728C156.095 255.545 156.045 255.319 156.083 255.099C156.121 254.879 156.245 254.684 156.427 254.555L388.346 92.0666C389.339 91.3742 390.521 91.002 391.732 91C392.943 90.998 394.125 91.3663 395.12 92.0554L628.721 254.553C628.869 254.656 628.98 254.803 629.038 254.973C629.096 255.143 629.098 255.327 629.044 255.498C628.99 255.67 628.883 255.819 628.738 255.926C628.593 256.032 628.418 256.089 628.238 256.089H628.238Z'
                  fill='#3F3D56'
                />
                <path
                  id='Vector_3'
                  d='M170.65 261.85L391.963 98.0191L614.956 273.507L403.366 398.794L288.491 372.641L170.65 261.85Z'
                  fill='#E6E6E6'
                />
                <path
                  id='Vector_4'
                  d='M298.189 476.18H188.854C187.499 476.182 186.199 475.646 185.24 474.691C184.281 473.736 183.741 472.439 183.739 471.085C183.737 469.732 184.273 468.434 185.229 467.475C186.186 466.517 187.484 465.978 188.839 465.976H298.189C299.543 465.974 300.843 466.509 301.803 467.465C302.762 468.42 303.302 469.717 303.304 471.07C303.306 472.424 302.77 473.722 301.813 474.68C300.857 475.639 299.558 476.178 298.204 476.18H298.189Z'
                  fill='#6C63FF'
                />
                <path
                  id='Vector_5'
                  d='M228.081 454.244H188.854C187.5 454.245 186.201 453.709 185.242 452.754C184.284 451.798 183.744 450.502 183.742 449.149C183.74 447.797 184.276 446.499 185.231 445.541C186.187 444.583 187.485 444.043 188.839 444.04H228.081C228.752 444.038 229.417 444.169 230.037 444.424C230.658 444.68 231.222 445.054 231.697 445.528C232.173 446.001 232.55 446.563 232.808 447.182C233.066 447.8 233.199 448.464 233.2 449.134C233.201 449.805 233.07 450.469 232.814 451.088C232.558 451.708 232.182 452.271 231.708 452.746C231.234 453.22 230.671 453.597 230.051 453.854C229.431 454.111 228.767 454.243 228.096 454.244H228.081Z'
                  fill='#6C63FF'
                />
                <path
                  id='Vector_6'
                  d='M626.549 254.402H626.38L529.412 295.76L396.74 352.346C396.222 352.564 395.665 352.677 395.103 352.68C394.54 352.683 393.983 352.575 393.462 352.363L256.584 295.641L157.234 254.469L157.082 254.402H156.913C155.345 254.404 153.842 255.026 152.734 256.134C151.625 257.241 151.002 258.742 151 260.308V516.79C151.002 518.356 151.625 519.857 152.734 520.964C153.842 522.071 155.345 522.694 156.913 522.696H626.549C628.117 522.694 629.62 522.071 630.728 520.964C631.837 519.857 632.46 518.356 632.462 516.79V260.308C632.46 258.742 631.837 257.241 630.728 256.134C629.62 255.026 628.117 254.404 626.549 254.402V254.402ZM630.773 516.79C630.772 517.909 630.327 518.981 629.535 519.772C628.743 520.563 627.669 521.008 626.549 521.009H156.913C155.793 521.008 154.719 520.563 153.927 519.772C153.135 518.981 152.69 517.909 152.689 516.79V260.308C152.691 259.217 153.114 258.169 153.872 257.383C154.629 256.596 155.661 256.133 156.752 256.089L256.584 297.464L392.812 353.924C394.287 354.523 395.939 354.514 397.407 353.898L529.412 297.59L626.718 256.089C627.808 256.136 628.837 256.601 629.592 257.387C630.347 258.172 630.77 259.219 630.773 260.308V516.79Z'
                  fill='#3F3D56'
                />
              </g>
              <g id='papel'>
                <path
                  id='Vector_7'
                  d='M395.337 352.439C394.506 352.44 393.683 352.279 392.913 351.965L256.422 295.397V118.328C256.424 116.762 257.048 115.261 258.156 114.154C259.265 113.047 260.767 112.424 262.335 112.422H524.183C525.75 112.424 527.253 113.047 528.362 114.154C529.47 115.261 530.094 116.762 530.096 118.328V295.52L529.839 295.63L397.834 351.938C397.043 352.269 396.194 352.44 395.337 352.439V352.439Z'
                  fill='white'
                />
                <path
                  id='Vector_8'
                  d='M374.088 178.611H281.174C279.383 178.608 277.667 177.896 276.402 176.631C275.137 175.365 274.426 173.65 274.426 171.861C274.426 170.073 275.137 168.358 276.402 167.092C277.667 165.827 279.383 165.114 281.174 165.112H374.088C375.878 165.114 377.594 165.827 378.86 167.092C380.125 168.358 380.835 170.073 380.835 171.861C380.835 173.65 380.125 175.365 378.86 176.631C377.594 177.896 375.878 178.608 374.088 178.611V178.611Z'
                  fill='#6C63FF'
                />
                <path
                  id='Vector_9'
                  d='M395.337 352.861C394.451 352.862 393.573 352.69 392.752 352.356L256 295.679V118.328C256.002 116.65 256.67 115.042 257.858 113.855C259.045 112.669 260.655 112.002 262.335 112H524.183C525.862 112.002 527.473 112.669 528.66 113.855C529.848 115.042 530.516 116.65 530.518 118.328V295.799L397.999 352.325C397.157 352.68 396.251 352.862 395.337 352.861V352.861ZM257.689 294.551L393.397 350.796C394.662 351.309 396.08 351.3 397.34 350.772L528.829 294.685V118.328C528.827 117.097 528.337 115.918 527.466 115.048C526.595 114.178 525.415 113.689 524.183 113.687H262.335C261.103 113.689 259.923 114.178 259.052 115.048C258.181 115.918 257.691 117.097 257.689 118.328L257.689 294.551Z'
                  fill='#3F3D56'
                />
                <path
                  id='Vector_10'
                  d='M325.941 149.925H281.174C279.382 149.925 277.663 149.214 276.396 147.948C275.128 146.683 274.416 144.966 274.416 143.176C274.416 141.386 275.128 139.669 276.396 138.403C277.663 137.137 279.382 136.426 281.174 136.426H325.941C327.733 136.426 329.452 137.137 330.719 138.403C331.987 139.669 332.699 141.386 332.699 143.176C332.699 144.966 331.987 146.683 330.719 147.948C329.452 149.214 327.733 149.925 325.941 149.925V149.925Z'
                  fill='#6C63FF'
                />
                <path
                  id='Vector_11'
                  d='M462.751 246.106H320.847C319.056 246.104 317.34 245.391 316.075 244.126C314.81 242.86 314.099 241.145 314.099 239.357C314.099 237.568 314.81 235.853 316.075 234.587C317.34 233.322 319.056 232.61 320.847 232.607H462.751C464.542 232.61 466.258 233.322 467.523 234.587C468.788 235.853 469.499 237.568 469.499 239.357C469.499 241.145 468.788 242.86 467.523 244.126C466.258 245.391 464.542 246.104 462.751 246.106V246.106Z'
                  fill='#CCCCCC'
                />
                <path
                  id='Vector_12'
                  d='M462.751 278.727H320.847C319.054 278.727 317.336 277.942 316.068 276.544C314.801 275.147 314.089 273.251 314.089 271.275C314.089 269.299 314.801 267.404 316.068 266.006C317.336 264.609 319.054 263.824 320.847 263.824H462.751C464.543 263.824 466.262 264.609 467.529 266.006C468.797 267.404 469.509 269.299 469.509 271.275C469.509 273.251 468.797 275.147 467.529 276.544C466.262 277.942 464.543 278.727 462.751 278.727V278.727Z'
                  fill='#CCCCCC'
                />
              </g>
              <g id='check'>
                <path
                  id='Vector_13'
                  d='M629.254 312.359C664.74 312.359 693.508 283.625 693.508 248.179C693.508 212.734 664.74 184 629.254 184C593.767 184 565 212.734 565 248.179C565 283.625 593.767 312.359 629.254 312.359Z'
                  fill='#6C63FF'
                />
                <path
                  id='Vector_14'
                  d='M623.131 275.272L603.9 250.572L615.084 241.884L624.189 253.579L654.95 221.143L665.237 230.877L623.131 275.272Z'
                  fill='white'
                />
              </g>
              <g id='avion-1'>
                <path
                  id='Vector_15'
                  d='M14.7247 101.377C14.2861 101.118 13.7833 100.988 13.274 101.001C12.7647 101.014 12.2694 101.171 11.845 101.452C11.4205 101.734 11.0841 102.129 10.8743 102.593C10.6644 103.056 10.5897 103.57 10.6585 104.074L12.7526 119.415C12.7814 119.641 12.7659 119.871 12.707 120.091C12.6413 120.308 12.5318 120.509 12.3851 120.682L0.656824 134.56C0.265018 135.007 0.0349699 135.572 0.00367493 136.165C-0.02762 136.758 0.141673 137.345 0.484296 137.83L0.496589 137.848C0.824807 138.339 1.30791 138.705 1.86899 138.89C2.43007 139.075 3.03686 139.066 3.59274 138.867L12.0627 135.995C12.3434 135.902 12.6442 135.888 12.9327 135.952C13.2212 136.017 13.4867 136.159 13.7006 136.363C13.8602 136.511 13.9875 136.69 14.0745 136.889C14.1614 137.088 14.2061 137.303 14.2058 137.521L14.5368 167.664C14.5403 168.1 14.6501 168.529 14.8566 168.914C15.0632 169.298 15.3604 169.627 15.7225 169.871C16.0834 170.114 16.4974 170.268 16.93 170.318C17.3625 170.368 17.8009 170.314 18.2081 170.16L81.4252 146.011C81.9019 145.83 82.3177 145.518 82.6248 145.111C82.932 144.705 83.118 144.22 83.1614 143.712C83.2048 143.204 83.104 142.695 82.8704 142.242C82.6368 141.789 82.2799 141.411 81.8409 141.152L80.9803 140.641L14.7247 101.377V101.377ZM11.7288 103.927C11.6881 103.624 11.7336 103.316 11.8601 103.038C11.9866 102.76 12.189 102.523 12.444 102.354C12.6991 102.185 12.9965 102.092 13.3022 102.084C13.608 102.077 13.9097 102.155 14.1729 102.311L80.4072 141.564L81.289 142.086C81.5509 142.242 81.7637 142.469 81.9029 142.74C82.0421 143.012 82.1021 143.317 82.0763 143.62C82.0505 143.924 81.9398 144.214 81.7568 144.458C81.5738 144.702 81.3259 144.89 81.0413 145L17.8242 169.149C17.5797 169.242 17.3164 169.274 17.0566 169.244C16.7968 169.213 16.5482 169.121 16.3319 168.974C16.1157 168.827 15.9381 168.63 15.8144 168.399C15.6907 168.169 15.6245 167.913 15.6214 167.651L15.2904 137.508C15.2906 137.21 15.2393 136.914 15.1388 136.633L79.4996 144.02C79.7506 144.051 80.0046 143.994 80.2178 143.858C80.431 143.722 80.5899 143.516 80.6671 143.275C80.7443 143.034 80.7348 142.774 80.6404 142.54C80.546 142.306 80.3726 142.112 80.1501 141.991C80.0961 141.961 80.0393 141.937 79.9805 141.918L13.8422 119.866C13.8582 119.667 13.8517 119.466 13.8228 119.268L11.7287 103.927L11.7288 103.927Z'
                  fill='#E5E5E5'
                />
                <path
                  id='Vector_16'
                  d='M14.7247 101.377C14.2861 101.118 13.7833 100.988 13.274 101.001C12.7647 101.014 12.2694 101.171 11.845 101.452C11.4205 101.734 11.0841 102.129 10.8743 102.593C10.6644 103.056 10.5897 103.57 10.6585 104.074L12.7526 119.415C12.7814 119.641 12.7659 119.871 12.707 120.091C12.6413 120.308 12.5318 120.509 12.3851 120.682L0.656824 134.56C0.265018 135.007 0.0349699 135.572 0.00367493 136.165C-0.02762 136.758 0.141673 137.345 0.484296 137.83L0.496589 137.848C0.824807 138.339 1.30791 138.705 1.86899 138.89C2.43007 139.075 3.03686 139.066 3.59274 138.867L12.0627 135.995C12.3434 135.902 12.6442 135.888 12.9327 135.952C13.2212 136.017 13.4867 136.159 13.7006 136.363C13.8602 136.511 13.9875 136.69 14.0745 136.889C14.1614 137.088 14.2061 137.303 14.2058 137.521L14.5368 167.664C14.5403 168.1 14.6501 168.529 14.8566 168.914C15.0632 169.298 15.3604 169.627 15.7225 169.871C16.0834 170.114 16.4974 170.268 16.93 170.318C17.3625 170.368 17.8009 170.314 18.2081 170.16L81.4252 146.011C81.9019 145.83 82.3177 145.518 82.6248 145.111C82.932 144.705 83.118 144.22 83.1614 143.712C83.2048 143.204 83.104 142.695 82.8704 142.242C82.6368 141.789 82.2799 141.411 81.8409 141.152L80.9803 140.641L14.7247 101.377V101.377ZM11.7288 103.927C11.6881 103.624 11.7336 103.316 11.8601 103.038C11.9866 102.76 12.189 102.523 12.444 102.354C12.6991 102.185 12.9965 102.092 13.3022 102.084C13.608 102.077 13.9097 102.155 14.1729 102.311L80.4072 141.564L81.289 142.086C81.5509 142.242 81.7637 142.469 81.9029 142.74C82.0421 143.012 82.1021 143.317 82.0763 143.62C82.0505 143.924 81.9398 144.214 81.7568 144.458C81.5738 144.702 81.3259 144.89 81.0413 145L17.8242 169.149C17.5797 169.242 17.3164 169.274 17.0566 169.244C16.7968 169.213 16.5482 169.121 16.3319 168.974C16.1157 168.827 15.9382 168.63 15.8145 168.399C15.6908 168.169 15.6245 167.912 15.6214 167.651L15.2904 137.508C15.2905 137.21 15.2393 136.914 15.1387 136.633C14.9971 136.229 14.7587 135.865 14.4444 135.573C14.4016 135.531 14.3544 135.491 14.3071 135.451L14.3041 135.447C13.949 135.154 13.5248 134.956 13.0719 134.873C12.619 134.79 12.1523 134.824 11.7161 134.972L3.24185 137.846C2.90783 137.967 2.54263 137.972 2.20552 137.86C1.86842 137.748 1.57915 137.525 1.38461 137.228L1.37844 137.219C1.17049 136.929 1.06756 136.577 1.08657 136.221C1.10559 135.864 1.24543 135.525 1.48308 135.259L13.2115 121.381C13.3369 121.235 13.4455 121.077 13.5354 120.907L13.5398 120.904C13.6265 120.741 13.6957 120.57 13.7461 120.393C13.7968 120.222 13.829 120.045 13.8422 119.866C13.8582 119.667 13.8517 119.466 13.8228 119.268L11.7288 103.927V103.927Z'
                  fill='#AAAAAA'
                />
                <path
                  id='Vector_17'
                  d='M13.8422 119.866L79.9805 141.918C80.0393 141.937 80.096 141.961 80.15 141.991C80.3725 142.112 80.5459 142.306 80.6403 142.54C80.7347 142.774 80.7441 143.034 80.6669 143.275C80.5898 143.515 80.4309 143.722 80.2177 143.858C80.0046 143.993 79.7505 144.051 79.4996 144.019L15.1387 136.633L14.0021 136.504L14.1279 135.43L14.304 135.447L14.307 135.451L79.6223 142.941L13.5398 120.904L13.5353 120.907L13.2497 120.808L13.5927 119.782L13.8422 119.866Z'
                  fill='#AAAAAA'
                />
              </g>
              <g id='avion-2'>
                <path
                  id='Vector_18'
                  d='M762.447 0.376904L696.191 39.6415L695.33 40.1521C694.891 40.4114 694.535 40.7892 694.301 41.2421C694.067 41.6949 693.966 42.2044 694.01 42.712C694.053 43.2196 694.239 43.7046 694.546 44.1113C694.854 44.518 695.269 44.8299 695.746 45.011L758.963 69.1599C759.37 69.3141 759.809 69.3683 760.241 69.318C760.674 69.2677 761.088 69.1143 761.449 68.8708C761.811 68.6267 762.108 68.2982 762.315 67.9137C762.521 67.5292 762.631 67.1002 762.634 66.6639L762.965 36.5208C762.965 36.3034 763.01 36.0884 763.097 35.8892C763.184 35.69 763.311 35.511 763.471 35.3633C763.685 35.1593 763.95 35.0174 764.239 34.9525C764.527 34.8877 764.828 34.9024 765.109 34.9952L773.578 37.8667C774.134 38.0664 774.741 38.0746 775.302 37.89C775.863 37.7053 776.346 37.3385 776.675 36.8479L776.687 36.8301C777.03 36.3447 777.199 35.7584 777.168 35.1653C777.136 34.5723 776.906 34.0069 776.514 33.5602L764.786 19.6821C764.639 19.5092 764.53 19.3081 764.464 19.0912C764.405 18.8709 764.39 18.6413 764.419 18.4151L766.513 3.07413C766.582 2.56989 766.507 2.05649 766.297 1.59275C766.087 1.12902 765.751 0.733734 765.326 0.452194C764.902 0.170654 764.407 0.0142468 763.897 0.000927855C763.388 -0.0123911 762.885 0.117912 762.447 0.376883V0.376904ZM765.442 2.92679L763.348 18.2677C763.32 18.4659 763.313 18.6666 763.329 18.8662L697.191 40.9177C697.132 40.9367 697.075 40.9614 697.021 40.9914C696.799 41.1116 696.625 41.3056 696.531 41.54C696.436 41.7744 696.427 42.0344 696.504 42.2749C696.581 42.5155 696.74 42.7216 696.954 42.8576C697.167 42.9935 697.421 43.0508 697.672 43.0195L762.033 35.6331C761.932 35.914 761.881 36.2101 761.881 36.5083L761.55 66.6512C761.547 66.9125 761.481 67.1691 761.357 67.3993C761.233 67.6296 761.056 67.8266 760.839 67.9736C760.623 68.1206 760.375 68.2134 760.115 68.2439C759.855 68.2744 759.592 68.2419 759.347 68.149L696.13 44.0001C695.845 43.89 695.597 43.7023 695.414 43.4583C695.231 43.2144 695.121 42.924 695.095 42.6202C695.069 42.3165 695.129 42.0116 695.268 41.7403C695.408 41.469 695.62 41.2423 695.882 41.0859L696.764 40.5638L762.998 1.31084C763.262 1.15515 763.563 1.07664 763.869 1.08427C764.175 1.09189 764.472 1.18537 764.727 1.35398C764.982 1.5226 765.185 1.75953 765.311 2.03767C765.438 2.31582 765.483 2.62393 765.442 2.92671V2.92679Z'
                  fill='#F1F1F1'
                />
                <path
                  id='Vector_19'
                  d='M762.447 0.376904L696.191 39.6415L695.33 40.1521C694.891 40.4114 694.535 40.7892 694.301 41.2421C694.067 41.6949 693.966 42.2044 694.01 42.712C694.053 43.2196 694.239 43.7046 694.546 44.1113C694.854 44.518 695.269 44.8299 695.746 45.011L758.963 69.1599C759.37 69.3141 759.809 69.3683 760.241 69.318C760.674 69.2677 761.088 69.1143 761.449 68.8708C761.811 68.6267 762.108 68.2982 762.315 67.9137C762.521 67.5292 762.631 67.1002 762.634 66.6639L762.965 36.5208C762.965 36.3034 763.01 36.0884 763.097 35.8892C763.184 35.69 763.311 35.511 763.471 35.3633C763.685 35.1593 763.95 35.0174 764.239 34.9525C764.527 34.8877 764.828 34.9024 765.109 34.9952L773.578 37.8667C774.134 38.0664 774.741 38.0746 775.302 37.89C775.863 37.7053 776.346 37.3385 776.675 36.8479L776.687 36.8301C777.03 36.3447 777.199 35.7584 777.168 35.1653C777.136 34.5723 776.906 34.0069 776.514 33.5602L764.786 19.6821C764.639 19.5092 764.53 19.3081 764.464 19.0912C764.405 18.8709 764.39 18.6413 764.419 18.4151L766.513 3.07413C766.582 2.56989 766.507 2.05649 766.297 1.59275C766.087 1.12902 765.751 0.733734 765.326 0.452194C764.902 0.170654 764.407 0.0142468 763.897 0.000927855C763.388 -0.0123911 762.885 0.117912 762.447 0.376883V0.376904ZM765.442 2.92679L763.348 18.2678C763.32 18.4659 763.313 18.6667 763.329 18.8663C763.342 19.0449 763.375 19.2215 763.425 19.3933C763.476 19.5703 763.545 19.7414 763.631 19.9039L763.636 19.9069C763.726 20.0765 763.834 20.2355 763.96 20.3808L775.688 34.2588C775.926 34.5251 776.066 34.8644 776.085 35.2206C776.104 35.5769 776.001 35.929 775.793 36.2191L775.787 36.228C775.592 36.525 775.303 36.7477 774.966 36.8599C774.629 36.9721 774.263 36.9673 773.929 36.8462L765.455 33.9716C765.019 33.824 764.552 33.7902 764.099 33.8733C763.646 33.9564 763.222 34.1538 762.867 34.4466L762.864 34.451C762.817 34.4908 762.77 34.5305 762.727 34.5733C762.413 34.8648 762.174 35.2286 762.032 35.6331C761.932 35.9139 761.881 36.21 761.881 36.5083L761.55 66.6512C761.547 66.9125 761.48 67.1691 761.357 67.3993C761.233 67.6295 761.056 67.8265 760.839 67.9736C760.623 68.1206 760.374 68.2133 760.115 68.2438C759.855 68.2744 759.592 68.2419 759.347 68.149L696.13 44.0001C695.845 43.89 695.597 43.7023 695.414 43.4583C695.231 43.2144 695.121 42.924 695.095 42.6202C695.069 42.3165 695.129 42.0116 695.268 41.7403C695.408 41.4691 695.62 41.2423 695.882 41.0859L696.764 40.5638L762.998 1.31086C763.262 1.15517 763.563 1.07666 763.869 1.08429C764.175 1.09191 764.472 1.18539 764.727 1.354C764.982 1.52262 765.185 1.75955 765.311 2.03769C765.438 2.31584 765.483 2.62395 765.442 2.92673V2.92679Z'
                  fill='#AAAAAA'
                />
                <path
                  id='Vector_20'
                  d='M763.579 18.7819L763.922 19.8084L763.636 19.9069L763.631 19.9038L697.549 41.9415L762.864 34.451L762.867 34.4466L763.043 34.4301L763.169 35.5038L762.033 35.6331L697.672 43.0195C697.421 43.0508 697.167 42.9936 696.954 42.8576C696.74 42.7217 696.582 42.5156 696.504 42.275C696.427 42.0344 696.437 41.7744 696.531 41.5401C696.625 41.3057 696.799 41.1116 697.021 40.9914C697.075 40.9614 697.132 40.9367 697.191 40.9178L763.329 18.8663L763.579 18.7819Z'
                  fill='#AAAAAA'
                />
              </g>
              <g id='avion-3'>
                <path
                  id='Vector_21'
                  d='M185.476 588.702C185.022 588.934 184.643 589.289 184.383 589.726C184.122 590.163 183.989 590.665 184.001 591.174C184.012 591.683 184.167 592.178 184.447 592.603C184.727 593.028 185.122 593.365 185.585 593.577L199.686 600.007C199.893 600.104 200.079 600.24 200.234 600.407C200.382 600.579 200.494 600.778 200.562 600.995L206.037 618.313C206.206 618.882 206.561 619.379 207.047 619.722C207.532 620.066 208.118 620.236 208.712 620.206L208.734 620.205C209.324 620.19 209.893 619.979 210.349 619.604C210.805 619.228 211.123 618.712 211.251 618.136L213.347 609.451C213.419 609.164 213.567 608.902 213.776 608.693C213.985 608.484 214.247 608.336 214.534 608.264C214.744 608.209 214.964 608.197 215.179 608.23C215.394 608.263 215.6 608.34 215.784 608.457L241.468 624.286C241.839 624.517 242.26 624.653 242.696 624.684C243.132 624.715 243.569 624.64 243.969 624.465C244.368 624.29 244.719 624.023 244.992 623.684C245.266 623.346 245.455 622.947 245.542 622.521L258.892 556.245C258.993 555.746 258.952 555.228 258.771 554.751C258.591 554.275 258.28 553.858 257.874 553.55C257.468 553.242 256.983 553.055 256.475 553.01C255.967 552.966 255.456 553.065 255.002 553.297L254.11 553.751L185.476 588.702V588.702ZM186.033 592.594C185.755 592.467 185.518 592.264 185.35 592.008C185.183 591.753 185.09 591.455 185.084 591.15C185.078 590.845 185.157 590.544 185.314 590.281C185.471 590.019 185.699 589.806 185.971 589.667L254.584 554.728L255.497 554.262C255.77 554.125 256.075 554.066 256.379 554.094C256.683 554.121 256.973 554.233 257.216 554.417C257.46 554.602 257.646 554.85 257.755 555.135C257.863 555.42 257.89 555.73 257.831 556.029L244.481 622.305C244.429 622.561 244.316 622.8 244.151 623.003C243.986 623.206 243.775 623.367 243.535 623.471C243.295 623.575 243.033 623.619 242.773 623.601C242.512 623.582 242.259 623.501 242.036 623.364L216.353 607.534C216.1 607.375 215.822 607.26 215.531 607.195L256.177 556.806C256.338 556.611 256.425 556.366 256.424 556.113C256.423 555.861 256.333 555.616 256.171 555.423C256.009 555.229 255.784 555.098 255.535 555.052C255.286 555.007 255.029 555.05 254.809 555.173C254.754 555.203 254.703 555.237 254.656 555.277L200.65 599.329C200.49 599.208 200.316 599.107 200.133 599.025L186.033 592.594V592.594Z'
                  fill='#F1F1F1'
                />
                <path
                  id='Vector_22'
                  d='M185.476 588.702C185.022 588.934 184.643 589.289 184.383 589.726C184.122 590.163 183.989 590.665 184.001 591.174C184.012 591.683 184.167 592.178 184.447 592.603C184.727 593.028 185.122 593.365 185.585 593.577L199.686 600.007C199.893 600.104 200.079 600.24 200.234 600.407C200.382 600.579 200.494 600.778 200.562 600.995L206.037 618.313C206.206 618.882 206.561 619.379 207.047 619.722C207.532 620.066 208.118 620.236 208.712 620.206L208.734 620.205C209.324 620.19 209.893 619.979 210.349 619.604C210.805 619.228 211.123 618.712 211.251 618.136L213.347 609.451C213.419 609.164 213.567 608.902 213.776 608.693C213.985 608.484 214.247 608.336 214.534 608.264C214.744 608.209 214.964 608.197 215.179 608.23C215.394 608.263 215.6 608.34 215.784 608.457L241.468 624.286C241.839 624.517 242.26 624.653 242.696 624.684C243.132 624.715 243.569 624.64 243.969 624.465C244.368 624.29 244.719 624.023 244.992 623.684C245.266 623.346 245.455 622.947 245.542 622.521L258.892 556.245C258.993 555.746 258.952 555.228 258.771 554.751C258.591 554.275 258.28 553.858 257.874 553.55C257.468 553.242 256.983 553.055 256.475 553.01C255.967 552.966 255.456 553.065 255.002 553.297L254.11 553.751L185.476 588.702V588.702ZM186.033 592.594C185.755 592.467 185.518 592.264 185.35 592.008C185.183 591.753 185.09 591.455 185.084 591.15C185.078 590.845 185.157 590.544 185.314 590.281C185.471 590.019 185.699 589.806 185.971 589.667L254.584 554.728L255.497 554.262C255.77 554.125 256.075 554.066 256.379 554.094C256.683 554.121 256.973 554.233 257.216 554.417C257.46 554.602 257.646 554.85 257.755 555.135C257.863 555.42 257.89 555.73 257.831 556.029L244.481 622.305C244.429 622.561 244.316 622.8 244.151 623.003C243.986 623.206 243.775 623.367 243.535 623.471C243.295 623.575 243.033 623.619 242.773 623.601C242.512 623.582 242.259 623.501 242.036 623.364L216.353 607.534C216.1 607.375 215.822 607.26 215.531 607.195C215.113 607.098 214.678 607.105 214.263 607.214C214.204 607.228 214.145 607.246 214.086 607.265L214.081 607.265C213.643 607.408 213.25 607.661 212.937 607.999C212.625 608.337 212.404 608.749 212.296 609.196L210.199 617.887C210.123 618.233 209.932 618.544 209.657 618.769C209.382 618.993 209.039 619.119 208.684 619.124L208.673 619.125C208.316 619.145 207.963 619.044 207.672 618.837C207.381 618.631 207.169 618.332 207.07 617.989L201.595 600.67C201.539 600.487 201.462 600.31 201.367 600.144L201.366 600.138C201.275 599.978 201.167 599.828 201.045 599.691C200.926 599.557 200.794 599.435 200.65 599.329C200.49 599.208 200.316 599.107 200.133 599.025L186.033 592.594V592.594Z'
                  fill='#AAAAAA'
                />
                <path
                  id='Vector_23'
                  d='M200.65 599.329L254.656 555.277C254.703 555.237 254.754 555.203 254.809 555.173C255.029 555.05 255.286 555.007 255.535 555.052C255.784 555.098 256.009 555.229 256.171 555.423C256.333 555.616 256.423 555.861 256.424 556.113C256.425 556.366 256.338 556.611 256.177 556.806L215.531 607.195L214.814 608.085L213.973 607.405L214.081 607.265L214.086 607.265L255.331 556.126L201.366 600.138L201.367 600.144L201.131 600.332L200.445 599.494L200.65 599.329Z'
                  fill='#AAAAAA'
                />
              </g>
            </g>
          </svg>
        </div>
        {text}
      </div>
    </div>
  );
};

export default ContactForm;
