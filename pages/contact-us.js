import Header from '../components/Header';
import { useState } from 'react';

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('input data', email, subject, content)
  }
  return (
    <div className="container">

      <Header />

      <h1>Contact Us</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormContrloInput1" className="form-label">이메일</label>
          <input type="email" className="form-control" id="exampleFormContrloInput1" placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)}></input>
        </div>
      </form>
      <form>
        <div className="mb-3">
          <label htmlFor="subjectInput" className="form-label">제목</label>
          <input type="text" name="subject" className="form-control" id="exampleFormContrloInput1" placeholder="제목을 입력하세요" value={subject} onChange={event => setSubject(event.target.value)}></input>
        </div>
      </form>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormContrloTextarea1" className="form-label">내용</label>
          <textarea type="email" className="form-control" id="exampleFormContrloTextarea1" placeholder="내용을 입력하세요" rows="3" value={content} onChange={event => setContent(event.target.value)}></textarea>
        </div>
      </form>

      <div className="mt-4">
        <button className="btn btn-primary btn-lg">
          문의하기</button>
      </div>
    </div>
  )
}
