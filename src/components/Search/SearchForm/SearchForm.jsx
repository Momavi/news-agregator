import { Formik, Form, Field } from 'formik'
import SearchItem from './SearchItem/SearchItem'

import s from './SearchForm.module.scss'

function Search(props) {
  let searchPage = props.searchPage;

  let sortElement = searchPage.sort.map(d => <SearchItem text={d.text} key={d.id} />);

  return (
    <Formik
      initialValues={{
        text: '',
        sort: 'relevance',
      }}
      onSubmit={values => {
        props.setFormData(values)
        props.getNews(values, props.newsPage.currentPage, props.newsPage.pageSize)
      }}>
      <Form className={s.form}>
        <Field className={s.form__input} name="text" />
        <div className={s.form__wrapper}>
          <div className={s.form__sort}>
            <label className={s.form__sort__text}>Sorting by</label>
            <Field className={s.form__sort__field} name="sort" as="select">
              {sortElement}
            </Field>
          </div>
        </div>
        <button className={s.form__button} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}



export default Search;