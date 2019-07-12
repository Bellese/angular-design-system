import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


import { AppTableComponent } from './table.component';
import { AppTableHeaderComponent } from '../table-header/table-header.component';
import { AppTableRowComponent } from '../table-row/table-row.component';
import { AppTableDataComponent } from '../table-data/table-data.component';
import { AppTableModalComponent } from '../table-modal/table-modal.component';
import { StarComponent } from '../../star/star/star.component';
import { StarRatingComponent } from '../../star/star-rating/star-rating.component';
import { AppPaginationComponent } from '../../paging/paging.component';
import { AppButtonComponent } from '../../button/button.component';
import { AppCheckBoxComponent } from '../../check-box/check-box.component';
import { ModalService } from '../../../services/modal.service';
import { PipesModule } from '../../../pipes/pipes.module';
import { FilterPipe } from '../../../pipes/filter.pipe';

import { defaultProps } from '../../../../../.storybook/helpers';

// TODO: Implement modal popups
function handleClickTable(event) {
    defaultProps.handleClick(event);
    // const modalService = new ModalService();
    // modalService.appendComponentToBody(
    //     AppTableModalComponent,
    //     event.event.target.id,
    //     'Modal Example',
    //     event.button.array,
    //     'cancelButton1'
    // );
}

const tableData = {
    'tableHeaders': [
      {
        'header': {
          'value': '',
          'prop': 'row_Header',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'Facility Rate',
          'prop': 'val1',
          'el': 'sort'
        }
      },
      {
        'header': {
          'value': 'Number of Patients',
          'prop': 'val2',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'State Rate',
          'prop': 'val3',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'National Rate',
          'prop': 'val4',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'Top 10%',
          'prop': 'val5',
          'el': 'default'
        }
      }
    ],
    'count': 27,
    'tableRows': [
      {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2':'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2':'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      },
    {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2':'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2':'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      },{
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2':'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2':'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      },{
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2':'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2':'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      },{
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2':'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2':'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      },{
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2':'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2':'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      }
    ]
};

const props = {
    ...defaultProps,
    handleClickTable: handleClickTable,
    tableData,
};

storiesOf('Table', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTableComponent, AppTableHeaderComponent, AppTableRowComponent, StarComponent, StarRatingComponent, AppPaginationComponent, AppButtonComponent, AppCheckBoxComponent, AppTableDataComponent],
            imports: [NgxPaginationModule, PipesModule, RouterModule],
            providers: [FilterPipe, ModalService]
        }),
    )
    .add('Normal', () => ({
        template: `
            <app-table
                [headers]="tableData.tableHeaders"
                [dataRows]="tableData.tableRows"
                [paginate]="true"
                [total]="tableData.count"
                [maxRows]=10
                (buttonClick)="handleClickTable($event)"
                (paginateNext)="handleClick($event)">
            </app-table>
        `,
        props
    }));
