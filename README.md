<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IncubXperts/usa-phone-number-validation-react">
    <img src="/image/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">USA Phone Number Validation in ReactJs</h3>
  <p align="center">
    This is an effort by [IncubXperts](https://incubxperts.com) to provide commonly used source code snippets as open source code to community. Feel free to use it in your projects, suggest improvements, report bugs to improve the code for community.  Feel free to contribute. 
    <br />
    Source code example to create an input field to accept USA and Global phone number with validations in ReactJs.
    <br />
    <a href="https://github.com/IncubXperts/usa-phone-number-validation-react/issues">Report Bug</a>
   �
    <a href="https://github.com/IncubXperts/usa-phone-number-validation-react/issues">Request Feature</a>
   �
    <a href="https://github.com/IncubXperts/usa-phone-number-validation-react/issues">Request new source code</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Source code example to create an input field to accept US phone number with validations in ReactJs. In our software projects many times, we need to create phone number fields with validations. 
  
  For example, If a user has to create a form wherein, he needs to accept a USA specific phone number from the user.
A typical USA phone number is ten along with a combination of brackets/hyphens/commas/dots and(or) nonbreaking spaces. Hence, USA phone numbers can be written in a number of formats. In order to keep the phone number formats consistent throughout the application, we have created an input field which accepts only ten digits from the user. The first three digits are the area code encapsulated inside the round brackets, followed by a nonbreaking space, and then hyphenate the three-digit exchange code with the four-digit number.
A standard American phone number looks like this: `(XXX) XXX-XXXX`. 
We accept only a ten digit phone number from the user, and we have used regex in order to create masking to input field, which adds brckets, non breaking space and a hyphen. Further, the phone number is tested with a regex expression to match the standard format: `(XXX) XXX-XXXX`

  If a user needs to accept a global phone number input from the user,
Phone numbers contain several components. An area code. The phone number itself and an international country code!
Then, there are many conventions for expressing the phone number. 
In some countries, they use periods to separate the numbers and improve readability. 
Some use dashes. Others use parentheses. Some use spaces. 
In order to keep the phone number formats consistent throughout the application, we have used an open source library in ReatJs which provides us with input fileds for global phone numbers in standardized format!
This sample source code provides an example to accept Global phone number. 
For this we have used, [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input), which further uses [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) for phone number parsing and formatting.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Sample code in ReactJs
- [ReactJS version 18.2.0](https://react.dev/learn/installation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
- ReactJs v18.2.0
- Works on Windows as well as Linux

### Installation

- Understand the code and use in your project as fit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

```
//phone number masking function that adds round brackets to first 3 digits, followed followed by a nonbreaking space, and then hyphenate the 3 digit exchange code with the 4 digit number
    const phoneMask = (phone) => {
        return phone.replace(/\D/g, '')
            .replace(/^(\d)/, '($1')
            .replace(/^(\(\d{3})(\d)/, '$1) $2')
            .replace(/(\d{3})(\d{1,5})/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    }

//regex for 10 digit number with standard format US phone number format: (XXX) XXX-XXXX
    const phoneRegex = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[ ]?[0-9]{3}[-]?[0-9]{4}$/;

    //validating phone number with regex to match standard format: (XXX) XXX-XXXX
    const ValidatePhoneNumber = (number) => {
        if (phoneRegex.test(number)) {
            setValid(true);

            //getting 10 digits phone number without brackets, space and hyphen 
            number = number.replace(/\D/g, "")
            console.log(number);
        }
        else {
            setValid(false);
        }
    };

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GPL License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

IncubXperts - [@incubxperts](https://twitter.com/incubxperts) - contact@incubxperts.com

Project Link: [https://github.com/IncubXperts](https://github.com/IncubXperts)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [IncubXperts](https://incubxperts.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[contributors-url]: https://github.com/IncubXperts/image_thumbnail_csharp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[forks-url]: https://github.com/IncubXperts/image_thumbnail_csharp/network/members
[stars-shield]: https://img.shields.io/github/stars/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[stars-url]: https://github.com/IncubXperts/image_thumbnail_csharp/stargazers
[issues-shield]: https://img.shields.io/github/issues/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[issues-url]: https://github.com/IncubXperts/image_thumbnail_csharp/issues
[license-shield]: https://img.shields.io/github/license/IncubXperts/image_thumbnail_csharp.svg?style=for-the-badge
[license-url]: https://github.com/IncubXperts/image_thumbnail_csharp/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/incubxperts
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 