import { Formik, Form, Field } from 'formik'
import SearchItem from './SearchItem/SearchItem'

import s from './SearchForm.module.scss'

function Search(props) {
  let searchPage = props.searchPage;

  let sortElement = searchPage.sort.map(d => <SearchItem text={d.text} key={d.id} />);
  let searchInElement = searchPage.searchIn.map(d => <SearchItem text={d.text} key={d.id} />);

  return (
    <Formik
      initialValues={{
        text: '',
        sort: 'Relevance',
        searchIn: 'Everything',
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
          <div className={s.form__searchIn}>
            <label className={s.form__searchIn__text}>Search in</label>
            <Field className={s.form__searchIn__field} name="searchIn" as="select">
              {searchInElement}
            </Field>
          </div>
        </div>
        <button className={s.form__button} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}



export default Search;