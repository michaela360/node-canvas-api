const getOptions = {
  users: {
    search: term => `search_term=${encodeURIComponent(term)}`,
    sort: {
      username: 'sort=username',
      email: 'sort=email',
      sis_id: 'sort=sis_id',
      last_login: 'sort=last_login'
    },
    order: {
      asc: 'order=asc',
      desc: 'order=desc'
    },
    enrollmentType: {
      teacher: 'type[]=TeacherEnrollment',
      student: 'type[]=StudentEnrollment',
      // student_view: 'type[]=student_view',
      ta: 'type[]=TaEnrollment',
      observer: 'type[]=ObserverEnrollment',
      designer: 'type[]=DesignerEnrollment'
    },
    include: {
      email: 'include[]=email',
      enrollments: 'include[]=enrollments',
      locked: 'include[]=locked',
      avatar_url: 'include[]=avatar_url',
      test_student: 'include[]=test_student',
      bio: 'include[]=bio',
      custom_links: 'include[]=custom_links',
      current_grading_period_scores: 'include[]=current_grading_period_scores',
      term: 'include[]=term',
      students: 'include[]=students',
      user: 'include[]=user',
      last_login: 'include[]=last_login',
      ns: 'ns[]=extraInfo'
    },
    userIds: id => `user_ids[]=${encodeURIComponent(id)}`,
    enrollmentState: {
      active: 'enrollment_state=active',
      invited: 'enrollment_state=invited',
      rejected: 'enrollment_state=rejected',
      completed: 'enrollment_state=completed',
      inactive: 'enrollment_state=inactive'
    },
    UnenrollmentTask: {
      conclude: 'task=conclude',
      delete: 'task=delete',
      inactivate: 'task=inactivate',
      deactivate: 'task=deactivate',
    }
  },
  courses: {
    include: {
      needs_grading_count: 'include[]=needs_grading_count',
      syllabus_body: 'include[]=syllabus_body',
      public_description: 'include[]=public_description',
      course_image: 'include[]=course_image',
      banner_image: 'include[]=banner_image',
      total_scores: 'include[]=total_scores',
      current_grading_period_scores: 'include[]=current_grading_period_scores',
      term: 'include[]=term',
      course_progress: 'include[]=course_progress',
      sections: 'include[]=sections',
      storage_quota_used_mb: 'include[]=storage_quota_used_mb',
      total_students: 'include[]=total_students',
      passback_status: 'include[]=passback_status',
      favorites: 'include[]=favorites',
      teachers: 'include[]=teachers',
      observed_users: 'include[]=observed_users'
    },
    content_types: {
      json: 'content_types[]=application/json',
    },
    state: {
      unpublished: 'state[]=unpublished',
      available: 'state[]=available',
      completed: 'state[]=completed',
      deleted: 'state[]=deleted'
    },
    enrollmentState: {
      active: 'enrollment_state=active',
      invited_or_pending: 'enrollment_state=invited_or_pending',
      completed: 'enrollment_state=completed'
    }
  },
  account: {
    with_enrollments: 'with_enrollments=true',
    enrollment_type: role => `enrollment_type[]=${encodeURIComponent(role)}`,
    published: 'published=true',
    completed: 'completed=true',
    blueprint: 'blueprint=true'
  },
  submissions: {
    rubric_assessment: 'include[]=rubric_assessment',
    submission_comments: 'include[]=submission_comments',
    submission: 'include[]=submission'
  },
  quiz: {
    quiz: 'include[]=quiz',
    user: 'include[]=user',

  },
  rubric: {
    assessments: 'include=assessments',
    graded_assessments: 'include=graded_assessments',
    peer_assessments: 'include=peer_assessments',
    data_assessment: 'style=full'
  },
  module: {
    include: {
      items: 'include[]=items',
      content_details: 'include[]=content_details'
    },
    
  },
  discussion: {
    include: {
      all_dates: 'include[]=all_dates',
      sections: 'include[]=sections',
      sections_user_count: 'include[]=sections_user_count',
      overrides: 'include[]=overrides'
    },
    order_by: {
      position: 'orderby=position',
      recent_activity: 'orderby=recent_activity',
      title: 'orderby=title'
    },
    scope: {
      locked: 'scope=locked',
      unlocked: 'scope=unlocked',
      pinned: 'scope=pinned',
      unpinned: 'scope=unpinned'
    },
    only_announcements: 'only_announcements=true',
    filter_by: {
      all: 'filter_by=all',
      unread: 'filter_by=unread'
    }
  }
};

module.exports = getOptions;